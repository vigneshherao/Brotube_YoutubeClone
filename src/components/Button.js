import React from "react";

const Button = ({ name }) => {
  return (
    <div className="hidden sm:block sm:bg-gray-200 sm:px-2 rounded-md">
      <button>{name}</button>
    </div>
  );
};

export default Button;
