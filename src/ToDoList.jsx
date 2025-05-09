import React, { useState } from "react";

function ToDoList() {
  const [task, settask] = useState([]);
  const [newtask, setnewtask] = useState("");

  function handleInputChange(event) {
    setnewtask(event.target.value);
  }

  function addtask() {
    if (newtask.trim() !== "") {
      settask(t => [...t, newtask.trim()]);
      setnewtask("");
    }
  }

  function deleteTask(index) {
    const update = task.filter((_, i) => i !== index);
    settask(update);
  }

  function movetakup(index) {
    if (index > 0) {
      const update = [...task];
      [update[index], update[index - 1]] = [update[index - 1], update[index]];
      settask(update);
    }
  }

  function movetakdown(index) {
    if (index < task.length - 1) {
      const update = [...task];
      [update[index], update[index + 1]] = [update[index + 1], update[index]];
      settask(update);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addtask();
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6  bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">TO DO LIST</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter a task"
          value={newtask}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="flex-grow border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={addtask}
          className="bg-indigo-600 p-1 text-white px-4 py-2 rounded-3xl hover:bg-indigo-700 transition-colors"
        >
          Add
        </button>
      </div>

      <ol className="list-decimal list-inside space-y-2">
        {task.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 rounded px-3 py-2"
          >
            <span className="flex-grow">{task}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => movetakup(index)}
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
                title="Move Up"
                disabled={index === 0}
              >
                ↑
              </button>
              <button
                onClick={() => movetakdown(index)}
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
                title="Move Down"
                disabled={index === task.length - 1}
              >
                ↓
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-600 hover:text-red-800 font-semibold"
                title="Delete"
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
