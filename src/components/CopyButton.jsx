import useSnippetStore from "../store/snippetStore";

export default function CopyButton() {

  const snippets = useSnippetStore(
    (state) => state.snippets
  );

  const selectedSnippetId = useSnippetStore(
    (state) => state.selectedSnippetId
  );

  const snippet = snippets.find(
    (s) => s.id === selectedSnippetId
  );

  const handleCopy = async () => {

    if (!snippet) return;

    try {

      await navigator.clipboard.writeText(
        snippet.content
      );

      alert("Copied to clipboard");

    } catch (error) {

      console.error("Copy failed", error);

    }
  };

  return (
    <button
      data-testid="copy-snippet-button"
      onClick={handleCopy}
      className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700"
    >
      Copy Code
    </button>
  );
}