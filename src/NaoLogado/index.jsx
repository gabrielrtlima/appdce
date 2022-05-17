import Header from '../Header'
import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const NaoLogado = () => {
    return (
        <>
            <Header />
            <div className='naologado'>
                <h1>Você precista está logado pra entrar nesta página</h1>
                <Link to="/"><button>Clique aqui para ir efetuar o login</button></Link>
            </div>
        </>
    )
}

export default NaoLogado