import useSnippetStore from "../store/snippetStore";

export default function GistExport() {

  const snippets = useSnippetStore(state => state.snippets);
  const selectedSnippetId = useSnippetStore(state => state.selectedSnippetId);

  const snippet = snippets.find(
    s => s.id === selectedSnippetId
  );

  const languageToExtension = {
    javascript: "js",
    typescript: "ts",
    python: "py",
    java: "java",
    c: "c",
    cpp: "cpp",
    csharp: "cs",
    go: "go",
    rust: "rs",
    php: "php",
    ruby: "rb",
    swift: "swift",
    kotlin: "kt",
    html: "html",
    css: "css",
    json: "json",
    markdown: "md",
    shell: "sh",
    plaintext: "txt",
  };

  const buildFileName = (title, language) => {
    const safeTitle = (title || "snippet")
      .trim()
      .replace(/[^a-zA-Z0-9-_ ]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase() || "snippet";

    const extension = languageToExtension[language] || "txt";

    return `${safeTitle}.${extension}`;
  };

  const handleExport = async () => {

    if (!snippet) {
      alert("Select a snippet first");
      return;
    }

    const token = (import.meta.env.VITE_GITHUB_TOKEN || "").trim();

    if (!token || token === "your_github_token_here") {
      alert(
        "GitHub token is missing. Add VITE_GITHUB_TOKEN to your .env file (with gist permission) and restart the dev server."
      );
      return;
    }

    const content = typeof snippet.content === "string"
      ? snippet.content
      : "";

    if (!content.trim()) {
      alert("Snippet content is empty. Add code before exporting.");
      return;
    }

    const payload = {
      description: snippet.title?.trim() || "Code Snippet Manager export",
      public: true,
      files: {
        [buildFileName(snippet.title, snippet.language)]: {
          content,
        },
      },
    };

    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    headers.Authorization = `Bearer ${token}`;

    try {

      const response = await fetch(
        "https://api.github.com/gists",
        {
          method: "POST",
          headers,
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {

        const errorMessage = data.message || `${response.status} ${response.statusText}`;

        if (response.status === 401 || response.status === 403) {
          alert(
            "Export failed: Authentication failed. Check VITE_GITHUB_TOKEN, ensure it has gist permission, then restart the app."
          );
          console.error(data);
          return;
        }

        alert(`Export failed: ${errorMessage}`);
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