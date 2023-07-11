import { useState } from 'react';
import './App.css';

function App() {

  const [likes,setLikes] = useState(0);
  const [value,setValue] = useState("Initial value");

  const increment = () => setLikes(likes+1);
  const decrement = () => setLikes(likes-1);

  const changeValue = (e) => setValue(e.target.value);

  return (
    <div className="App">
      <h2>{likes}</h2>
      <h2>{value}</h2>
      <input 
        type='text' 
        value={value} 
        onChange={changeValue}
      />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;

