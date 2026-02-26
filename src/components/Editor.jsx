import Editor from "@monaco-editor/react";
import useSnippetStore from "../store/snippetStore";

export default function CodeEditor() {
  const snippets = useSnippetStore(
    (state) => state.snippets
  );

  const selectedSnippetId = useSnippetStore(
    (state) => state.selectedSnippetId
  );

  const theme = useSnippetStore(
    (state) => state.theme
  );

  const updateSnippet = useSnippetStore(
    (state) => state.updateSnippet
  );

  const snippet = snippets.find(
    (s) => s.id === selectedSnippetId
  );

  if (!snippet) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Select or create a snippet
      </div>
    );
  }

  return (
    <div
      data-testid="monaco-editor-container"
      className="h-full w-full"
    >
      <Editor
        height="100%"
        width="100%"
        language={snippet.language}
        value={snippet.content}
        theme={theme}
        onChange={(value) =>
          updateSnippet(snippet.id, value || "")
        }
        options={{
          fontSize: 14,
          minimap: { enabled: false },
        }}
      />
    </div>
  );
}