import React from "react";

const Button = ({ label = "Click Me", onClick }) => {
  const handleClick = () => {
    console.log("Button clicked!");
    if (onClick) onClick(); // call external handler if provided
  };

  return (
    <div className="flex justify-center items-center px-5 py-2">
      <button
        onClick={handleClick}
        aria-label={label}
        className="w-48 font-semibold text-lg bg-blue-600 text-white px-4 py-2 
          rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transition-all 
          duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
