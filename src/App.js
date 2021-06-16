import './App.css';
import React from 'react';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(()=>{
    fetch('/hola')
      .then((res)=> res.json())
      .then((data)=> setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
