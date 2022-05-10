import HeaderLogado from "../HeaderLogado";
import './index.css';

export default function CriarAnuncio() {
    return(
        <>
            <HeaderLogado />
            <div className="teste">
                <div className="container-criar">
                    <div className="container-img-desc">
                        <div className="container-img">
                            <img src="./img-anuncio.svg" alt=""/>
                            <input type="file" name="imagem" id="imagem" />
                        </div>
                        <div className="container-desc">
                            <input type="text" name="nome_anuncio" id="nome_anuncio" placeholder="Nome do anúncio" size={20} maxLength={18}/>
                            <textarea name="desc_anuncio" id="desc_anuncio" placeholder="Descrição do anúncio" rows={8}></textarea>
                        </div>
                    </div>
                    <button>Publicar anúncio</button>
                </div>
            </div>
        </>
    );
}