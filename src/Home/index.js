import React, { useState, useContext } from 'react';
import Context from '../Store/Context';
import { useNavigate } from 'react-router-dom';
import Header from '../Header'
import './index.css'


export default function Home() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { setToken } = useContext(Context);
    const navigate = useNavigate();
    const url = 'http://localhost:8080/api/login'


    const handleSubmit = async (e) => {
        e.preventDefault();

        var formLogin = []
        for (var property in {email, senha}) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent({email, senha}[property]);
            formLogin.push(encodedKey + "=" + encodedValue);
        }
        formLogin = formLogin.join("&");

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formLogin,
            mode: 'cors'
        })
        const data = await response.json();
        console.log(data)

        localStorage.setItem('token', data.token)
        localStorage.setItem('usuarioEmail', data.email)

        if (data.token) {
            setToken(data.token);
            navigate('/perfil')
        }

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
                    <input type="password" placeholder={"Insira sua senha"} name={'password'} id={'password'} value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    <button>Entrar</button>
                </form>
            </div>
        </>
    )
}