import CreateSnippetButton from "../CreateSnippetButton";
import GistImport from "../GistImport";
import GistExport from "../GistExport";
import CopyButton from "../CopyButton";
import BackupButton from "../BackupButton";
import RestoreButton from "../RestoreButton";
import CodeEditor from "../Editor";

export default function EditorSection() {
  return (
    <div className="flex flex-col gap-4">

      {/* Action Buttons Row */}
      <div className="flex flex-wrap gap-3">

        <CreateSnippetButton />
        <GistImport />
        <GistExport />
        <CopyButton />
        <BackupButton />
        <RestoreButton />

      </div>

      {/* Monaco Editor */}
      <div className="border rounded shadow-sm">
        <CodeEditor />
      </div>

    </div>
  );
}