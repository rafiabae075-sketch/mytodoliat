import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

 
  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return; 
    setTodos([...todos, task]);
    setTask("");
  };

  
  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1 className="title"> My Todo List</h1>

      <form onSubmit={addTask} className="todo-form">
        <input
          type="text"
          placeholder='Enter you Todo' 
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <span>{todo}</span>
            <button onClick={() => deleteTask(index)}></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
