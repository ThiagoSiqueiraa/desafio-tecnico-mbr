import React, { useContext, useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router';
import Wrapper from './ui/Wrapper';
import UserContext from './context/UserContext/UserContext';

function App() {

  const [name, setName] = useState("")
  const user = useContext(UserContext)

  let navigate = useNavigate();
  const routeChange = () => {
    user.setName(name)
    let path = `perguntas`;
    navigate(path);
  }

  return (
    <Wrapper width={'600px'} height={'400px'} >
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
