import './App.css';
import './style.css'
import Home from './Home'
import Cadastro from './Cadastro'
import Anuncios from "./Anuncios";

import PerfilUsuario from "./PerfilUsuario";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Provider from './Store/Provider';
import PrivateRoute from './Routes/Private/Private';

import MeusAnuncios from './MeusAnuncios';
import EditarPerfil from './EditarPerfil';
import CriarAnuncio from './CriarAnuncio';
import Logout from './Logout';
import NaoLogado from './NaoLogado';

function App() {
  return (
      <>
        <Router>
          <Provider>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/cadastrar" element={<Cadastro/>}/>
                  <Route path="/401" element={<NaoLogado />}/>
                  <Route exact path='/' element={<PrivateRoute/>}>
                    <Route path="/perfil" element={<PerfilUsuario/>}/>
                    <Route path="/editar-perfil" element={<EditarPerfil />}/>
                    <Route path="/meus-anuncios" element={<MeusAnuncios/>}/>
                    <Route path="/criar-anuncio" element={<CriarAnuncio />}/>
                    <Route path="/anuncios" element={<Anuncios/>}/>
                    <Route path="/logout" element={<Logout />}/>
                  </Route>
              </Routes>
          </Provider>
        </Router>
      </>
  );
}

export default App;
