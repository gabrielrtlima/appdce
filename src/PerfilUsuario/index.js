import './index.css'
import HeaderLogado from "../HeaderLogado"
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function PerfilUsuario() {

    axios.get()

    return (
        <>
            <HeaderLogado />
            <div className="perfil-usuario">
                <h1>Perfil</h1>
                <div className='container-botoes'>
                    <Link to="/editar-perfil"><button className={"button-perfil"}>Configurações da Conta</button></Link>
                    <Link to=""><button className={"button-perfil"}>Anúncios Salvos</button></Link>
                    <Link to="/meus-anuncios"><button className={"button-perfil"}>Meus Anúncios</button></Link>
                </div>
            </div>
        </>
    )
}