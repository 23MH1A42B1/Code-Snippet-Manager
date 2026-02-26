import { useState } from "react";
import CreateSnippetModal from "./CreateSnippetModal";

export default function CreateSnippetButton() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        data-testid="create-snippet-button"
        onClick={() => setOpen(true)}
        className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Create Snippet
      </button>

      {open && (
        <CreateSnippetModal
          onClose={() => setOpen(false)}
        />
      )}

    </>
  );
}