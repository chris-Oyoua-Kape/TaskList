import React from "react";
import "../css/Task.css";

// Task possède trois props : task, deleteTask et checkTask
const Task = ({ task, deleteTask, checkTask }) => {
  return (
    <div className="task">
      {/* L'input est une case à cocher qui va permettre de cocher ou décocher une tâche avec la fonction checkTask */}
      <input
        className="task-input"
        type="checkbox"
        checked={task.checked}
        onChange={() => checkTask(task.id)}
      />
      {/* On affiche la date de la tâche */}
      <span className="task-title">{task.date}</span>
      {/* Si la tâche est cochée, on affiche "checked: " suivi du titre de la tâche, sinon on affiche juste le titre de la tâche */}
      <span className="task-title">
        {task.checked ? "checked: " + task.title : task.title}
      </span>
      {/* Lorsque le bouton est cliqué, on appelle la méthode deleteTask avec l'id de la tâche */}
      <button className="task-button" onClick={() => deleteTask(task.id)}>
        Supprimer
      </button>
    </div>
  );
};

export default Task;
