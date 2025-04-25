import React from "react";
import { CircleX } from "lucide-react";

function DeleteButton({ onDelete }) {
  return (
    <button onClick={onDelete} className="absolute top-5 right-5">
      <CircleX strokeWidth="1.5px" />
    </button>
  );
}

export default DeleteButton;
