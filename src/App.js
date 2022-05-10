import './App.css';
import './style.css'
import Home from './Home'
import Cadastro from './Cadastro'
import PerfilUsuario from "./PerfilUsuario";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MeusAnuncios from './MeusAnuncios';
import EditarPerfil from './EditarPerfil';
import CriarAnuncio from './CriarAnuncio';

function App() {
  return (
      <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastrar" element={<Cadastro/>}/>
                <Route path="/perfil" element={<PerfilUsuario/>}/>
                <Route path="/meus-anuncios" element={<MeusAnuncios/>}/>
                <Route path="/editar-perfil" element={<EditarPerfil />}/>
                <Route path="/criar-anuncio" element={<CriarAnuncio />}/>
            </Routes>
        </Router>
      </>
  );
}

export default App;
