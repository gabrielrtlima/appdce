import './index.css'

export default function Anuncios(){
    return(
        <header>
            <div className={"cabecalho"}>
                <input type="text" placeholder={"Buscar"}/>

            </div>
            <div className={"bloco_anuncio"}>
                <p className={'strong'}>Nome do anúncio</p>
                <img src=""/>
                <p>Descrição</p>
            </div>
            <div>
                <button>Logout</button>
                <button>Configurações</button>
            </div>
        </header>
    )
}