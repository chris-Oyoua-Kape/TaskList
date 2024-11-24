import React from "react";
import Task from "./Task";
import "../css/TaskList.css";

// TaskList possède trois props : tasks, deleteTask et checkTask
const TaskList = ({ tasks, deleteTask, checkTask }) => {
  return (
    <div className="task-list">
      {/* Pour chaque tâche, on affiche un composant Task */}
      {tasks.map((task) => {
        return (
          // Task possède trois props : task, deleteTask et checkTask
          <Task task={task} deleteTask={deleteTask} checkTask={checkTask} />
        );
      })}
    </div>
  );
};

export default TaskList;
