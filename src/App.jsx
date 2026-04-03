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
      
    } catch (err) {
      console.error("Copy error:", err);
      alert("Copy failed!");
    }
  };

  // ✅ CLEAR FUNCTION
  const handleClear = () => {
    setItems([]);
  };

  return (
  <div className="flex">
<div>
    {/* LEFT PANEL (BUTTONS) */}
    <div className="fixed left-0 top-0 h-screen w-72  z-50 flex flex-row gap-4 p-4 shadow">

      <button
        onClick={handlePaste}
        className="bg-blue-600 paste w-full text-nowrap h-32 rounded hover:bg-blue-700 transition text-black flex items-center justify-center"
      >
        Paste & Create H4
      </button>

      <button
        onClick={handleCopy}
        className="bg-green-600 w-full h-12 rounded  text-nowrap hover:bg-green-700 transition text-black flex items-center justify-center"
      >
        Copy All
      </button>

  

    </div>
</div>
    {/* RIGHT CONTENT */}
    <div className="ml-72 p-4 w-full">
      {items.map((item, index) => (
        <p key={index} className="text-black text-nowrap border-b pb-1">
          {item}
        </p>
      ))}
    </div>

  </div>
);
}

export default App;
