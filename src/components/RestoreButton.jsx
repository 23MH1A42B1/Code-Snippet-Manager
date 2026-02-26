import useSnippetStore from "../store/snippetStore";

export default function RestoreButton() {

  const setSnippets =
    useSnippetStore(
      (state) => state.setSnippets
    );

  const handleRestore =
    (event) => {

      const file =
        event.target.files[0];

      if (!file) return;

      const reader =
        new FileReader();

      reader.onload = (e) => {

        try {

          const data =
            JSON.parse(
              e.target.result
            );

          setSnippets(data);

          alert(
            "Restore successful"
          );

        } catch {

          alert(
            "Invalid JSON file"
          );

        }
      };

      reader.readAsText(file);
    };

  return (
    <input
      type="file"
      accept="application/json"
      data-testid="restore-input"
      onChange={handleRestore}
      className="border px-3 py-2 rounded"
    />
  );
}