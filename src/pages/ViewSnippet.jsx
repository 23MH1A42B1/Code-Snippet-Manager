import { useParams } from "react-router-dom";
import useSnippetStore from "../store/snippetStore";
import Editor from "@monaco-editor/react";

export default function ViewSnippet() {

  const { snippetId } = useParams();

  const snippets = useSnippetStore(
    (state) => state.snippets
  );

  const snippet = snippets.find(
    (s) => s.id === snippetId
  );

  if (!snippet) {
    return (
      <div className="p-10 text-center text-red-500">
        Not Found
      </div>
    );
  }

  return (
    <div className="p-6">

      <h2 className="text-2xl mb-4">
        {snippet.title}
      </h2>

      <Editor
        height="500px"
        language={snippet.language}
        value={snippet.content}
        theme="vs-dark"
        options={{
          readOnly: true, // ✅ IMPORTANT
        }}
      />

    </div>
  );
}
