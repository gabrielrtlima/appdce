import HeaderLogado from "../HeaderLogado";
import './index.css';
import React, { useEffect, useState } from 'react';

export default function CriarAnuncio() {   
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [contato, setContato ] = useState('');
    const [imagem, setImagem] = useState('');
    const [imagemURL, setImagemURL] = useState('./img-anuncio.svg');
    const [id_usuario, setId_usuario ] = useState('');

    const onImageChange = (e) => {
        e.preventDefault()
        const formData = new FormData();
        // setImagemURL(URL.createObjectURL(e.target.files[0]));
        formData.append("file", e.target.files[0]);
        formData.append("upload_preset", "r2kismvj")
        console.log(formData)
        fetch("https://api.cloudinary.com/v1_1/dgkyahn55/image/upload", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setImagemURL(data.url);
        })
    }

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
            setId_usuario(data.id);
        }, error => {
            console.log(error);
        });
    }, [])

    console.log(id_usuario)

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
                contato: contato,
                usuario_id: id_usuario,
                imagem: imagemURL
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
                            <img src={imagemURL} alt=""/>
                            <input type="file" name="imagem" id="imagem" onChange={onImageChange}/>
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