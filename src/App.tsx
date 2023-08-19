import React, { useContext, useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router';
import Wrapper from './ui/Wrapper';
import UserContext from './context/UserContext/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [name, setName] = useState("")
  const user = useContext(UserContext)

  let navigate = useNavigate();

  const notifyRequiredName = () => toast.warn("Entre com o seu nome para continuar", {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    theme: 'dark'
  });

  const checkName = () => {
    if (name === "") {
      notifyRequiredName()
      return false
    }
    user.setName(name)
    return true
  }
  


  const routeChange = () => {
    if(checkName()) navigate('perguntas');
  }

  return (
    <Wrapper width='25%' padding='1.2%'>
      <ToastContainer />
      <div className="content-login result">
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
