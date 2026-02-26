import { useState } from "react";
import useSnippetStore from "../store/snippetStore";
import { X, ArrowLeft } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export default function CreateSnippetModal({ onClose }) {

  const addSnippet = useSnippetStore(
    (state) => state.addSnippet
  );

  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {

    addSnippet({
      id: uuidv4(),
      title,
      language,
      tags: tags.split(","),
      content,
    });

    onClose();
  };

  return (

    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-[9999]">

      {/* Modal Box */}
      <div className="bg-white w-[600px] rounded-lg shadow-lg p-6 relative z-[10000]">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">

          <button
            onClick={onClose}
            className="flex items-center gap-2 text-blue-600"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <button onClick={onClose}>
            <X size={20} />
          </button>

        </div>

        {/* Title */}
        <input
          data-testid="snippet-title-input"
          placeholder="Snippet title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        {/* Language */}
        <select
          data-testid="snippet-language-input"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>

        {/* Tags */}
        <input
          data-testid="snippet-tags-input"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        {/* Content */}
        <textarea
          placeholder="Code content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-2 mb-3 rounded h-40"
        />

        {/* Save */}
        <button
          data-testid="save-snippet-button"
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Snippet
        </button>

      </div>

    </div>
  );
}