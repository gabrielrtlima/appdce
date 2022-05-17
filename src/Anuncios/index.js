import './index.css'
import HeaderLogado from '../HeaderLogado'
import React, { useEffect, useState } from 'react'

export default function Anuncios(){

    const [anuncios, setAnuncios] = useState([])
    const [usuario_id, setUsuario_id] = useState('')
    const usuarioEmail = localStorage.getItem('usuarioEmail')

    useEffect(() => {
        const url = 'http://localhost:8080/api/usuario/' + usuarioEmail
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setUsuario_id(data.id)
        })
    }, [])

    const id = localStorage.setItem('usuario_id', usuario_id)

    useEffect(() => {
        const url = 'http://localhost:8080/api/anuncios'
        fetch(url)
        .then(response => response.json())
        .then(data => setAnuncios(data))
    }, [])
    
    return(
       <>
        <HeaderLogado />
                <div className="container-anuncios">
                    <h1>Anúncios</h1>
            {anuncios.map(anuncio => (
                    <div className="anuncio">
                        <div className='anuncio-title'>
                            <h1>{anuncio.nome}</h1>
                        </div>
                        <div className='anuncio-container'>
                            <div className="anuncio-img">
                                <img src={anuncio.imagem}/>
                            </div>

                            <div className="anuncio-desc">
                                {anuncio.descricao}
                            </div>
                        </div>
                        <div>
                            <button className='anuncio-contato' onClick={(e) => {window.alert(anuncio.contato)}}>Contato</button>
                        </div>
                    </div>
            ))}
            </div>
        </>
    )
}