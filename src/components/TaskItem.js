import React from "react";

function TaskItem({ task, deleteTask, toggleComplete }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const deadline = new Date(`${task.deadline}T00:00:00`);
  const isOverdue = deadline < today && !task.completed;

  return (
    <div className={`task ${task.priority.toLowerCase()}`}>
      <h3 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </h3>
      <p>Due: {task.deadline}</p>
      <p>Priority: {task.priority}</p>
      {isOverdue && <span className="overdue">Overdue</span>}
      <div className="task-actions">
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? "Mark Pending" : "Complete"}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
