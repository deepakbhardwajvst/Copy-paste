import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      const newText = " " + clipboardText;
      setItems((prev) => [...prev, newText]);
    } catch (err) {
      console.error("Clipboard error:", err);
      alert("Clipboard access denied!");
    }
  };

  // Copy all <p> text
  const handleCopy = async () => {
    try {
      const allText = items.join("\n");
      await navigator.clipboard.writeText(allText);
      alert("All text copied!");
    } catch (err) {
      console.error("Copy error:", err);
      alert("Copy failed!");
    }
  };

  return (
    <div className="  p-6">
      <div className="fixed top-4 left-4 flex gap-4 z-50">
        <button
          onClick={handlePaste}
          className="bg-blue-600 px-16 py-2 rounded text-nowrap hover:bg-blue-700 transition text-black"
        >
          Paste & Create H4
        </button>

        <button
          onClick={handleCopy}
          className="bg-green-600 px-8 py-2 rounded text-nowrap hover:bg-green-700 transition text-black"
        >
          Copy All
        </button>
      </div>

      {/* RIGHT SIDE FIXED PANEL */}
      <div className="mt-20">
        {items.map((item, index) => (
          <p key={index} className="text-white-800 border-b pb-0.1 text-nowrap">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
