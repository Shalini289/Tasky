import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    const newTask = {
      id: Date.now(),
      title: trimmedTitle,
      deadline,
      priority,
      completed: false
    };

    addTask(newTask);
    setTitle("");
    setDeadline("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="Task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Task..."
        required
      />
      <input
        aria-label="Deadline"
        type="date"
        value={deadline}
        onChange={e => setDeadline(e.target.value)}
        required
      />
      <select
        aria-label="Priority"
        value={priority}
        onChange={e => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button className="add" type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
