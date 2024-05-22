import { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleCreate = () => {
    if (task.trim()) {
      setList([...list, task]);
      setTask("");
    }
  };

  const handleDelete = (id) => {
    setList(list.filter((_, index) => index !== id));
  };

  const handleUpdate = (newTask, id) => {
    setList(list.map((item, index) => (index === id ? newTask : item)));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCreate();
    }
  };

  return (
    <>
      <h1>TO DO LIST</h1>
      <input
        type="text"
        value={task}
        onChange={handleTask}
        onKeyPress={handleKeyPress}
        placeholder="Type Here"
      />
      <button onClick={handleCreate}>Add Item</button>
      <div className="container">
        {list.map((task, index) => (
          <div key={index} className="task-div">
            <input
              type="text"
              value={task}
              onChange={(e) => handleUpdate(e.target.value, index)}
            />
            <button onClick={() => handleDelete(index)}>Delete Item</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
