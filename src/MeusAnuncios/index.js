import HeaderLogado from "../HeaderLogado";
import './index.css'

export default function MeusAnuncios() {
    return(
        <>
            <HeaderLogado />
            <div className="container-anuncios">
                <h1>Meus anúncios</h1>
                <div className="anuncio">
                    <div className="anuncio-img">
                        <img src="../img-anuncio.svg"/>
                    </div>
                    <div className="anuncio-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                </div>
            </div>
        </>
    )
}            