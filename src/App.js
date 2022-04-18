import './App.css';
import './style.css'
import Header from './Header'
import Home from './Home'
import Cadastro from './Cadastro'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastrar" element={<Cadastro/>}/>
            </Routes>
        </Router>
      </>
  );
}

export default App;
