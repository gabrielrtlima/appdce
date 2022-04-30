import React, { useState } from 'react';
import Header from '../Header'

import './index.css'


export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const url = 'http://localhost/api/v1/auth/login'

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit', {email, password})
    }


    return(
        <>
            <Header />
            <div className="corpo">
                <div className="resumo">
                    <img src="./upe.svg"/>
                    <p>Este site é um produto da disciplina de DCE x IV (Disciplina curricular de Extensão)
                        no curso de Bacharelado de Engenharia de Software da turma do 4º  período.</p><br/>
                    <p>Monitorado pelo: <p className={'strong'}>Prof. Dr. Ivaldir Honorio de Farias Junior.</p></p>
                    <p>Alunos: <p className={'strong'}>Gabriel Lima, Igor Leonardo, Renan Guilherme</p></p>
                </div>
                <form className="login" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input type="email" placeholder={"Insira seu E-mail"} name={'email'} id={'email'} value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder={"Insira sua senha"} name={'password'} id={'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button>Entrar</button>
                </form>
            </div>
        </>
    )
}