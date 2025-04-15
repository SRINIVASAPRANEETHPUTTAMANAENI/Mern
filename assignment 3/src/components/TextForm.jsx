import { useState } from "react";

const TextForm = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Text:", input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-md mx-auto flex items-center"
    >
      <input
        type="text"
        className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="ml-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default TextForm;
