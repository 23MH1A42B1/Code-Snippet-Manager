import useSnippetStore from "../store/snippetStore";

export default function GistExport() {

  const snippets = useSnippetStore(state => state.snippets);
  const selectedSnippetId = useSnippetStore(state => state.selectedSnippetId);

  const snippet = snippets.find(
    s => s.id === selectedSnippetId
  );

  const handleExport = async () => {

    if (!snippet) {
      alert("Select a snippet first");
      return;
    }

    const token = import.meta.env.VITE_GITHUB_TOKEN;

    try {

      const response = await fetch(
        "https://api.github.com/gists",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({
            description: snippet.title,
            public: true,
            files: {
              "snippet.js": {
                content: snippet.content,
              },
            },
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {

        alert(data.message);
        console.error(data);

        return;
      }

      alert("Export successful");

      window.open(data.html_url, "_blank");

    } catch (error) {

      console.error(error);
      alert("Export failed");

    }

  };

  return (
    <button
      data-testid="gist-export-button"
      onClick={handleExport}
      className="px-3 py-1.5 text-sm bg-gray-700 text-white rounded"
    >
      Export
    </button>
  );
}