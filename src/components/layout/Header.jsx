import ThemeToggle from "../ThemeToggle";
import Search from "../Search";

export default function Header() {

  return (
    <div className="w-full border-b px-4 py-3 flex items-center justify-between">

      <h1 className="text-lg font-semibold">
        Code Snippet Manager
      </h1>

      <div className="flex items-center gap-3 w-96">

        <Search />

        <ThemeToggle />

      </div>

    </div>
  );
}