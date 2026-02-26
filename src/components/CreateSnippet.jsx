import useSnippetStore from "../store/snippetStore";
import { v4 as uuidv4 } from "uuid";

export default function CreateSnippet() {
  const addSnippet = useSnippetStore(
    (state) => state.addSnippet
  );

  const handleCreate = () => {
    const snippet = {
      id: uuidv4(),
      title: "React Hook",
      language: "javascript",
      content: "useState example",
      tags: ["react", "hook"],
    };

    addSnippet(snippet);
  };

  return (
    <button
      data-testid="create-snippet-button"
      onClick={handleCreate}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      Create Snippet
    </button>
  );
}