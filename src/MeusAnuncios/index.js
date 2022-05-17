import HeaderLogado from "../HeaderLogado";
import './index.css'
import React,{ useEffect, useState } from "react";

export default function MeusAnuncios() {

    const [nome, setNome] = useState('');
    const [description, setDescription] = useState('');
    const usuario_id = localStorage.getItem('usuario_id')

    const [anuncios, setAnuncios] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:8080/api/anuncios/'
        fetch(url)
        .then(response => response.json())
        .then(data => setAnuncios(data))
    }, []);

    console.log(anuncios)

    // useEffect(() => {
    //     const anuncio = {
    //         method: 'POST',
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json',
    //         },
    //         mode: 'cors',
    //         cache: 'default',
    //       };
    //       fetch('http://localhost/api/v1/announces/')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             data.map(item => {
    //                 setNome(item.nome);
    //                 setDescription(item.description);
    //             })
    //         });
    // }, []);

    return(
        <>
            <HeaderLogado />
            <div className="container-anuncios">
                <h1>Meus anúncios</h1>
                {anuncios.map(anuncio => {
                    if(anuncio.usuario_id == usuario_id){
                        return (
                            <div className="anuncio">
                                <div className="anuncio-title">
                                    <h1>{anuncio.nome}</h1>
                                </div>
                                <div className="anuncio-container">
                                    <div className="anuncio-img">
                                        <img src={anuncio.imagem}/>
                                    </div>
                                    <div className="anuncio-desc">
                                        {anuncio.descricao}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </>
    )
}            