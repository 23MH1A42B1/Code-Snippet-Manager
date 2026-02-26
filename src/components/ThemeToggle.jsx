import { Sun, Moon } from "lucide-react";
import useSnippetStore from "../store/snippetStore";

export default function ThemeToggle() {

  const theme = useSnippetStore(
    (state) => state.theme
  );

  const toggleTheme = useSnippetStore(
    (state) => state.toggleTheme
  );

  return (
    <button
      data-testid="theme-toggle-button"
      onClick={toggleTheme}
      className="p-2"
    >
      {theme === "vs-dark"
        ? <Sun size={18} />
        : <Moon size={18} />
      }
    </button>
  );
}