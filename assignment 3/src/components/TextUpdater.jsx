import { useState } from "react";

const TextUpdater = () => {
  const [text, setText] = useState("");

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-md mx-auto text-center">
      <input
        type="text"
        placeholder="Type something..."
        className="w-full p-3 mb-4 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="text-lg font-medium text-gray-800 dark:text-white">
        {text}
      </p>
    </div>
  );
};

export default TextUpdater;
