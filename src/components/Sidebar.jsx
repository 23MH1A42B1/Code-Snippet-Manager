import { Trash2 } from "lucide-react";
import useSnippetStore from "../store/snippetStore";

export default function Sidebar() {

  const snippets = useSnippetStore(
    (state) => state.snippets
  );

  const selectedSnippetId = useSnippetStore(
    (state) => state.selectedSnippetId
  );

  const selectSnippet = useSnippetStore(
    (state) => state.selectSnippet
  );

  const deleteSnippet = useSnippetStore(
    (state) => state.deleteSnippet
  );

  return (
    <div>

      {snippets.map((snippet) => (

        <div
          key={snippet.id}
          onClick={() =>
            selectSnippet(snippet.id)
          }
          className={`flex justify-between items-center p-2 mb-2 rounded cursor-pointer
            ${
              selectedSnippetId === snippet.id
                ? "bg-blue-600"
                : "bg-slate-800 hover:bg-slate-700"
            }
          `}
        >

          {/* Title */}
          <span>
            {snippet.title}
          </span>

          {/* Delete */}
          <Trash2
            size={16}
            className="text-red-400 hover:text-red-600"
            onClick={(e) => {
              e.stopPropagation();
              deleteSnippet(snippet.id);
            }}
          />

        </div>

      ))}

    </div>
  );
}