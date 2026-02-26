import CreateSnippetButton from "../CreateSnippetButton";
import GistExport from "../GistExport";
import CopyButton from "../CopyButton";
import BackupButton from "../BackupButton";
import RestoreButton from "../RestoreButton";
import GistImport from "../GistImport";

export default function Toolbar() {
  return (
    <div className="w-full border-b bg-gray-50 px-4 py-2">

      {/* ROW 1 → ALL BUTTONS */}
      <div className="flex items-center justify-between">

        {/* Left buttons */}
        <div className="flex items-center gap-2">

          <CreateSnippetButton />
          <GistExport />
          <CopyButton />
          <BackupButton />
          <RestoreButton />

        </div>

        {/* Right Import */}
        <div className="w-72">
          <GistImport />
        </div>

      </div>
    </div>
  );
}