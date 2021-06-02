import React, { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [input, setInput] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      console.log(e.target.value);
      setInput(e.target.value);
    }
  }, [input])
  

  return (
    <div className="cal">
      <div>
        {input}
      </div>

      <button
        onClick={handleClick}
        value={ 1 }
      >
        1
      </button>
    </div>
  );
}

export default App;
