import Sidebar from "./components/Sidebar";
import Header from "./components/layout/Header";
import Toolbar from "./components/layout/Toolbar";
import CodeEditor from "./components/Editor";

export default function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">

      {/* Header */}
      <Header />

      {/* Main */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <div className="w-64 bg-slate-900 text-white p-4">
          <Sidebar />
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col">

          {/* Toolbar */}
          <Toolbar />

          {/* Editor */}
          <div className="flex-1 bg-black">
            <CodeEditor />
          </div>

        </div>

      </div>

    </div>
  );
}