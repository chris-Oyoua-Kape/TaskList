import React from "react";
import "../css/DeleteTask.css";

// DeleteTask possède trois props : deleteSelectedTasks, deleteAllTasks et tasks
const DeleteTask = ({ deleteSelectedTasks, deleteAllTasks, tasks }) => {
  return (
    <div className="delete-task-content">
      {/* button permet de supprimer les tâches sélectionnées */}
      <button
        className="delete-task-button"
        disabled={tasks.filter((task) => task.checked).length === 0}
        onClick={() => deleteSelectedTasks()}
      >
        Supprimer les tâches sélectionnées
      </button>
      {/* button permet de supprimer toutes les tâches */}
      <button
        className="delete-task-button"
        disabled={tasks.length === 0}
        onClick={() => deleteAllTasks()}
      >
        Supprimer toutes les tâches
      </button>
    </div>
  );
};

export default DeleteTask;
