import './index.css'
import {Link} from "react-router-dom";

export default function HeaderLogado() {
    return(
        <>
            <header>
                <div className="criar-anuncio">
                    <button>
                        <img src="icone-mais.svg"/>
                        <p>Criar Anúncio</p>
                    </button>
                </div>
                <div className="menu">
                    <a><Link to="/anuncios">ANÚNCIOS</Link></a>
                    <a><Link to="/perfil">PERFIL</Link></a>
                </div>
            </header>
        </>
    )
}