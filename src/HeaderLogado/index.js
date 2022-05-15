import './index.css'
import {Link} from "react-router-dom";

export default function HeaderLogado() {

    const logout = () => {
        localStorage.removeItem('token')
    }

    return(
        <>
            <header>
                <div className="criar-anuncio">
                    <button>
                        <img src="icone-mais.svg"/>
                        <a><Link to="/criar-anuncio">CRIAR ANÚNCIO</Link></a>
                    </button>
                </div>
                <div className="menu">
                    <a><Link to="/anuncios">ANÚNCIOS</Link></a>
                    <a><Link to="/perfil">PERFIL</Link></a>
                    <a><Link to="/logout" onClick={logout()}>SAIR</Link></a>
                    
                </div>
            </header>
        </>
    )
}