import React from "react";
import Button from "./Button";
import { namesOfButton } from "../utils/contants";

const ButtonList = () => {
  return (
    <div className="flex justify-evenly m-2">
      {namesOfButton.map((btn) => (
        <Button key={btn} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
