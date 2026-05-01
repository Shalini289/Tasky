import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
      if (Array.isArray(saved)) {
        setTasks(saved);
      }
    } catch {
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks(currentTasks => [...currentTasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(currentTasks => currentTasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(currentTasks => currentTasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    if (filter === "High") return task.priority === "High";
    return true;
  });

  return (
    <div className={darkMode ? "dark app" : "app"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="planner">
        <TaskForm addTask={addTask} />
        <FilterBar activeFilter={filter} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      </main>
    </div>
  );
}

export default App;
