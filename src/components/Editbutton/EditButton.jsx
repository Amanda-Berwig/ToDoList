import React from "react";
import { Edit } from "lucide-react";

function EditButton({ id, task, iniciarEdicao }) {
  return (
    <button
      onClick={() => iniciarEdicao(id, task)}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700"
    >
      <Edit size={18} />
    </button>
  );
}

export default EditButton;
