import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleComplete }) {
  return (
    <div className="content">
      {tasks.length === 0 ? (
        <p className="empty-state">No tasks to show.</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
