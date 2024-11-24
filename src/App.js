import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import DeleteTask from "./components/DeleteTask";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  // Crée un état tasks qui est un tableau vide
  // tasks contiendra la liste des tâches
  // setTasks est une fonction qui permet de mettre à jour l'état tasks
  const [tasks, setTasks] = useState([]);

  // Crée un état alertedTasks qui est un ensemble vide
  // alertedTasks contiendra la liste des tâches alertées
  // setAlertedTasks est une fonction qui permet de mettre à jour l'état alertedTasks
  const [alertedTasks, setAlertedTasks] = useState(new Set());

  // Permet de supprimer une tâche
  // Filtre la liste des tâches pour retourner une nouvelle liste sans la tâche ayant l'id passée en paramètre
  // Cette nouvelle liste est ensuite utilisée pour mettre à jour les tâches
  // On utilise cette méthode dans le composant TaskList
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  // Permet d'ajouter une tâche
  // Crée un nouvel objet tâche avec un id généré par uuidv4, le texte passé en paramètre et checked à false
  // Ajoute cette nouvelle tâche à la liste des tâches
  // On utilise cette méthode dans le composant AddTaskForm
  const addTask = (text, date) => {
    const newTask = { id: uuidv4(), title: text, checked: false, date: date };
    setTasks([...tasks, newTask]);
  };

  // Permet de cocher ou décocher une tâche
  // Parcours la liste des tâches et retourne une nouvelle liste
  // Pour chacune des tâches, si l'id de la tâche est égal à l'id passée en paramètre, on retourne une nouvelle tâche avec le checked inversé
  // Cette nouvelle liste est ensuite utilisée pour mettre à jour les tâches
  // On utilise cette méthode dans le composant TaskList
  const checkTask = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, checked: !task.checked } : task;
      })
    );
  };

  // Permet de supprimer les tâches sélectionnées
  // Filtre la liste des tâches pour retourner une nouvelle liste sans les tâches cochées
  // Cette nouvelle liste est ensuite utilisée pour mettre à jour les tâches
  // On utilise cette méthode dans le composant DeleteTask
  const deleteSelectedTasks = () => {
    if (
      window.confirm(
        "Voulez-vous vraiment supprimer les tâches sélectionnées ?"
      )
    ) {
      const notSelectedTasks = tasks.filter((task) => !task.checked);
      setTasks(notSelectedTasks);
    }
  };

  // Permet de supprimer toutes les tâches
  // Met à jour les tâches avec un tableau vide
  // On utilise cette méthode dans le composant DeleteTask
  const deleteAllTasks = () => {
    if (window.confirm("Voulez-vous vraiment supprimer toutes les tâches ?")) {
      setTasks([]);
    }
  };

  // useEffect permet d'effectuer des actions à chaque rendu du composant
  useEffect(() => {
    // Crée un intervalle qui vérifie si une tâche est arrivée à échéance toutes les 2 secondes
    const interval = setInterval(() => {
      // Récupère la date du jour
      const today = new Date().toISOString().split("T")[0];
      tasks.forEach((task) => {
        // Si la date de la tâche est égale à la date du jour et que la tâche n'a pas déjà été alertée, on affiche une alerte
        if (task.date === today && !alertedTasks.has(task.id)) {
          alert("La tâche " + task.title + " est arrivée à échéance");
          // On ajoute l'id de la tâche à l'ensemble des tâches alertées
          setAlertedTasks((prev) => new Set(prev).add(task.id));
        }
      });
    }, 2000);

    // Retourne une fonction qui sera exécutée à chaque démontage du composant
    return () => clearInterval(interval);

    // useEffect dépend de tasks et alertedTasks
  }, [tasks, alertedTasks]);

  return (
    <div className="App">
      <h1 className="App-title">TODO LIST</h1>
      {/* AddTaskForm permet d'ajouter une tâche */}
      <AddTaskForm addTask={addTask} />
      {/* DeleteTask permet de supprimer les tâches sélectionnées ou toutes les tâches */}
      <DeleteTask
        deleteSelectedTasks={deleteSelectedTasks}
        deleteAllTasks={deleteAllTasks}
        tasks={tasks}
      />
      {/* TaskList permet d'afficher la liste des tâches */}
      <TaskList tasks={tasks} deleteTask={deleteTask} checkTask={checkTask} />
    </div>
  );
}

export default App;
