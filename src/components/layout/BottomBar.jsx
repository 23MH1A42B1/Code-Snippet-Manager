import BackupButton from "../BackupButton";
import RestoreButton from "../RestoreButton";
import GistImport from "../GistImport";

export default function BottomBar() {
  return (
    <div className="flex justify-between p-3 border-t">

      <div className="flex gap-2">
        <BackupButton />
        <RestoreButton />
      </div>

      <div className="w-96">
        <GistImport />
      </div>

    </div>
  );
}