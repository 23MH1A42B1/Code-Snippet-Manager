import useSnippetStore from "../store/snippetStore";

export default function Search() {

  const setSearch = useSnippetStore(
    (state) => state.setSearch
  );

  return (
    <input
      type="text"
      data-testid="search-input"
      placeholder="Search snippets..."
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="w-full border px-3 py-1.5 text-sm rounded"
    />
  );
}