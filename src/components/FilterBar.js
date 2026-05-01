import React from "react";

const filters = ["All", "Completed", "Pending", "High"];

function FilterBar({ activeFilter, setFilter }) {
  return (
    <div className="filter-bar">
      {filters.map(filter => (
        <button
          className={activeFilter === filter ? "active" : ""}
          key={filter}
          onClick={() => setFilter(filter)}
        >
          {filter === "High" ? "High Priority" : filter}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
