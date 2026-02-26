import useSnippetStore from "../store/snippetStore";

export default function BackupButton() {

  const snippets = useSnippetStore(
    (state) => state.snippets
  );

  const handleBackup = () => {

    // convert snippets to JSON
    const jsonData = JSON.stringify(
      snippets,
      null,
      2
    );

    // create file blob
    const blob = new Blob(
      [jsonData],
      { type: "application/json" }
    );

    // create download URL
    const url =
      URL.createObjectURL(blob);

    // create temporary link
    const a =
      document.createElement("a");

    a.href = url;
    a.download =
      "snippets-backup.json";

    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      data-testid="backup-button"
      onClick={handleBackup}
      className="px-3 py-1.5 text-sm bg-orange-500 text-white rounded hover:bg-orange-600"
    >
      Backup Snippets
    </button>
  );
}