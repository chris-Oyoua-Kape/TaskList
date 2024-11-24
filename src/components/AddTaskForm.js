import React, { useState } from "react";
import "../css/AddTaskForm.css";

// AddTaskForm possède une props : addTask
const AddTaskForm = ({ addTask }) => {
  // Crée un état taskText qui est une chaîne de caractères vide
  // taskText contiendra le texte entré par l'utilisateur
  // setTaskText est une fonction qui permet de mettre à jour
  const [taskText, setTaskText] = useState("");

  // Crée un état taskDate qui est une chaîne de caractères vide
  // taskDate contiendra la date entrée par l'utilisateur
  // setTaskDate est une fonction qui permet de mettre à jour
  const [taskDate, setTaskDate] = useState("");

  //  Permer d'ajouter une tâche
  // Check si le texte et la date ne sont pas vides
  // Si c'est le cas, on appelle la méthode addTask avec le texte et la date
  // On met ensuite à jour taskText et taskDate avec une chaîne de caractères vide
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskText.trim() && taskDate.trim()) {
      addTask(taskText, taskDate);
      setTaskText("");
      setTaskDate("");
    }
  };

  return (
    // Lors de la soumission du formulaire, on appelle la méthode handleSubmit
    <form className="add-task-form-form" onSubmit={handleSubmit}>
      {/* Lorsque le texte change, on met à jour taskText avec la méthode setTaskText */}
      <input
        className="add-task-form-input"
        type="text"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
      />
      {/* Lorsque la date change, on met à jour taskDate avec la méthode setTaskDate */}
      <input
        className="add-task-form-input"
        type="date"
        value={taskDate}
        onChange={(event) => setTaskDate(event.target.value)}
      />
      {/* Lorsque le bouton est cliqué, on soumet le formulaire */}
      <button
        disabled={taskText === "" || taskDate === ""}
        className="add-task-form-button"
        type="submit"
      >
        Ajouter
      </button>
    </form>
  );
};

export default AddTaskForm;
