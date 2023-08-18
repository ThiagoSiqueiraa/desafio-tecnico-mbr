import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [name, setName] = useState("")
  console.log(name)

  return (
    <div className="App">
      <div className="wrapper">
        {/* aqui talvez possa ser um form */}
        <div className="content-login">
          <h1>Nome</h1>
          <div className='wrapper-input'>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button><span>acessar</span></button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
