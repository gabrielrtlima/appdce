import HeaderLogado from "../HeaderLogado";
import './index.css';
import React, { useState } from 'react';

export default function CriarAnuncio() {   
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [contato, setContato ] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/api/anuncio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                descricao: descricao,
                contato: contato
            })
        });
        const data = await response.json();
        console.log(data);
    }
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
                            <input type="text" name="nome_anuncio" id="nome_anuncio" placeholder="Nome do anúncio" size={20} maxLength={18} onChange={(e) => setNome(e.target.value)}/>
                            <textarea name="desc_anuncio" id="desc_anuncio" placeholder="Descrição do anúncio" rows={8} onChange={(e) => { setDescricao(e.target.value)}}/>
                            <input type="text" name="contato" id="contato" onChange={(e) => {setContato(e.target.value)}}/>
                        </div>
                    </div>
                    <button onClick={submit}>Publicar anúncio</button>
                </div>
            </div>
        </>
    );
}