import HeaderLogado from "../HeaderLogado";
import './index.css'
import React,{ useEffect, useState } from "react";

export default function MeusAnuncios() {

    const [nome, setNome] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const anuncio = {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            mode: 'cors',
            cache: 'default',
          };
          fetch('http://localhost/api/v1/announces/')
            .then((response) => response.json())
            .then((data) => {
                data.map(item => {
                    setNome(item.nome);
                    setDescription(item.description);
                })
            });
    }, []);

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
                        LOREM IPSUM DOLOR SIT AMET CONSECTEUR ADIPISCING ELIT
                        LOREM IPSUM DOLOR SIT AMET CONSECTEUR ADIPISCING ELIT
                        LOREM IPSUM DOLOR SIT AMET CONSECTEUR ADIPISCING ELIT
                        LOREM IPSUM DOLOR SIT AMET CONSECTEUR ADIPISCING ELIT
                    </div>
                </div>
            </div>
        </>
    )
}            