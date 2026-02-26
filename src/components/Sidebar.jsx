import { Trash2 } from "lucide-react";
import useSnippetStore from "../store/snippetStore";

export default function Sidebar() {

  const snippets = useSnippetStore(
    (state) => state.snippets
  );

  const search = useSnippetStore(
    (state) => state.search
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

  const normalizedSearch = search
    .trim()
    .toLowerCase();

  const filteredSnippets = snippets.filter(
    (snippet) => {
      if (!normalizedSearch) {
        return true;
      }

      const title = snippet.title?.toLowerCase() || "";
      const content = snippet.content?.toLowerCase() || "";
      const language = snippet.language?.toLowerCase() || "";
      const tags = Array.isArray(snippet.tags)
        ? snippet.tags.join(" ").toLowerCase()
        : "";

      return (
        title.includes(normalizedSearch) ||
        content.includes(normalizedSearch) ||
        language.includes(normalizedSearch) ||
        tags.includes(normalizedSearch)
      );
    }
  );

  return (
    <div>

      {filteredSnippets.length === 0 && (
        <div className="p-2 text-sm text-slate-400">
          No snippets found
        </div>
      )}

      {filteredSnippets.map((snippet) => (

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