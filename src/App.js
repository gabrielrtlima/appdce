import './App.css';
import './style.css'
import Home from './Home'
import Cadastro from './Cadastro'
import PerfilUsuario from "./PerfilUsuario";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastrar" element={<Cadastro/>}/>
                <Route path="/perfil" element={<PerfilUsuario/>}/>
            </Routes>
        </Router>
      </>
  );
}

export default App;
