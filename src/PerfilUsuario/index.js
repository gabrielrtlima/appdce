import './index.css'
import HeaderLogado from "../HeaderLogado"

export default function PerfilUsuario() {
    return (
        <>
            <HeaderLogado />
            <div className="perfil-usuario">
                <h1>Perfil</h1>
                <button className={"button-perfil"}>Configurações da Conta</button>
                <button className={"button-perfil"}>Anúncios Salvos</button>
                <button className={"button-perfil"}>Meus Anúncios</button>
            </div>
        </>
    )
}