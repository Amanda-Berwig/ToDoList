import React from "react";
import { CircleX } from "lucide-react";

function DeleteButton({ onDelete }) {
  return (
    <button onClick={onDelete} className="absolute top-4 right-5">
      <CircleX />
    </button>
  );
}

export default DeleteButton;
