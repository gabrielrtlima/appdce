import HeaderLogado from '../HeaderLogado';
import './index.css';
import React, { useEffect } from 'react';

export default function EditarPerfil() {

    console.log(localStorage.getItem('usuarioEmail'))

    const [ parametro, setParametro ] = React.useState({
        email: localStorage.getItem('usuarioEmail'),
        nome: '',
        senha: '',
        cpf: '',
        telefone: ''
    });

    useEffect(() => {
        const parametros = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('usuarioToken')
            },
            mode: 'cors',
            cache: 'default'
        }; 

        fetch('http://localhost:8080/api/usuario/' + localStorage.getItem('usuarioEmail'), parametros)
        .then(response => response.json())
        .then(data => {
            setParametro({
                id: data.id,
                email: data.email,
                nome: data.nome,
                senha: data.senha,
                cpf: data.cpf,
                telefone: data.telefone
            });
        }, error => {
            console.log(error);
        }
        );
    }, [])
    console.log(parametro)

    return (
        <>
            <HeaderLogado />
            <div className="editar-perfil">
                <h1>Configurações da Conta</h1>
                <div className="container-editar">
                    <input type="text" name="nome" id="nome" placeholder={parametro.nome} value=""/>
                    <input type="email" name="email" id="email" placeholder={parametro.email}/>
                    <input type="password" name="senha" id="senha" placeholder={"*********"}/>
                    {/* <input type="date" name="data_nascimento" id="data_nascimento" placeholder='Data de nascimento'/> */}
                    <input type="text" name="cpf" id="cpf" placeholder={parametro.cpf}/>
                    <div className='container-botao'>
                        <button className='botao-excluir'>Excluir Conta</button>
                        <button className='botao-atualizar'>Salvar</button>
                    </div>
                </div>
            </div>
        </>
    );
}