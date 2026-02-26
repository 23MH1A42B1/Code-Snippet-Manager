import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSnippetStore = create(
  persist(
    (set) => ({

      snippets: [],

      search: "",

      selectedSnippetId: null,

      theme: "vs-dark",

      // CREATE SNIPPET
      addSnippet: (snippet) =>
        set((state) => ({
          snippets: [...state.snippets, snippet],

          // VERY IMPORTANT → select new snippet
          selectedSnippetId: snippet.id,
        })),

      // SELECT SNIPPET
      selectSnippet: (id) =>
        set({
          selectedSnippetId: id,
        }),

      // UPDATE SNIPPET CONTENT
      updateSnippet: (id, content) =>
        set((state) => ({
          snippets: state.snippets.map((s) =>
            s.id === id
              ? { ...s, content }
              : s
          ),
        })),

      // DELETE
      deleteSnippet: (id) =>
        set((state) => ({
          snippets: state.snippets.filter(
            (s) => s.id !== id
          ),
          selectedSnippetId: null,
        })),

      // THEME
      toggleTheme: () =>
        set((state) => ({
          theme:
            state.theme === "vs-dark"
              ? "vs"
              : "vs-dark",
        })),

      // SEARCH
      setSearch: (value) =>
        set({
          search: value,
        }),

    }),
    {
      name: "code_snippets_data",
    }
  )
);

export default useSnippetStore;