import { useState } from "react";
import useSnippetStore from "../store/snippetStore";

export default function GistImport() {

  const [url, setUrl] = useState("");

  const addSnippet = useSnippetStore(
    (state) => state.addSnippet
  );

  const extractGistId = (url) => {

    const parts = url.split("/");

    return parts[parts.length - 1];

  };

  const handleImport = async () => {

    const token = import.meta.env.VITE_GITHUB_TOKEN;

    try {

      const gistId = extractGistId(url);

      const response = await fetch(
        `https://api.github.com/gists/${gistId}`,
        {
          headers: {
            ...(token && {
              Authorization: `Bearer ${token}`,
            }),
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const data = await response.json();

      const file = Object.values(
        data.files
      )[0];

      addSnippet({
        id: crypto.randomUUID(),
        title:
          data.description ||
          file.filename,
        language:
          file.language?.toLowerCase() ||
          "plaintext",
        tags: ["gist"],
        content: file.content,
      });

      alert("Imported successfully!");

    } catch (error) {

      console.error(error);

      alert("Import failed. Check console.");

    }

  };

  return (
    <div className="flex gap-2">

      <input
        data-testid="gist-import-input"
        value={url}
        onChange={(e) =>
          setUrl(e.target.value)
        }
        placeholder="Paste Gist URL"
        className="flex-1 border px-2 py-1 text-sm rounded"
      />

      <button
        data-testid="gist-import-button"
        onClick={handleImport}
        className="bg-black text-white px-3 py-1 text-sm rounded"
      >
        Import
      </button>

    </div>
  );
}