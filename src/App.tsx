import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router';
import Wrapper from './ui/Wrapper';

function App() {

  const [name, setName] = useState("")
  console.log(name)

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `perguntas`;
    navigate(path);
  }

  return (
    <Wrapper>
      {/* aqui talvez possa ser um form */}
      <div className="content-login">
        <h1>Nome</h1>
        <div className='wrapper-input'>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={routeChange}><span>acessar</span></button>
        </div>

      </div>
    </Wrapper>
  );
}

export default App;
