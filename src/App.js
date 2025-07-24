import { useEffect, useState } from 'react';
import './App.css';
import Viewer from './component/Viewer.js';
import Controller from './component/Controller.js';
function App() {
  const[count, setCount] = useState(0);
  const handleOnClick = (value) => {
    setCount(count + value);
  };
  useEffect(() => {
    console.log("count updated:", count);
  }, [count]);
  
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleOnClick={handleOnClick} />
      </section>
    </div>
  );
}

export default App;
