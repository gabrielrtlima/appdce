import './index.css'
import HeaderLogado from '../HeaderLogado'
import React, { useEffect, useState } from 'react'

export default function Anuncios(){

    const [anuncios, setAnuncios] = useState([])

    useEffect(() => {
        const url = 'http://localhost:8080/api/anuncios'
        fetch(url)
        .then(response => response.json())
        .then(data => setAnuncios(data))
    }, [])

    console.log(anuncios)

    return(
       <>
        <HeaderLogado />
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Anúncios</h1>
                </div>
            </div>
            <div className="row">
                {anuncios.map(anuncio => (
                    <div className="col-md-4" key={anuncio.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{anuncio.nome}</h5>
                                <p className="card-text">{anuncio.descricao}</p>
                                <a href="#" className="btn btn-primary">Contato</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

       </>
    )
}