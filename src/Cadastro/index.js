import './index.css'

export default function Cadastro() {
    return(
        <div className="corpo">
            <div className="resumo">
                <img src="./upe.svg"/>
                <p>Este site é um produto da disciplina de DCE x IV (Disciplina curricular de Extensão)
                    no curso de Bacharelado de Engenharia de Software da turma do 4º  período.</p><br/>
                <p>Monitorado pelo: <p className={'strong'}>Prof. Dr. Ivaldir Honorio de Farias Junior.</p></p>
                <p>Alunos: <p className={'strong'}>Gabriel Lima, Igor Leonardo, Renan Guilherme</p></p>
            </div>
            <div className="cadastro">
                <input type="text" placeholder={"Insira seu Nome"}/>
                <input type="email" placeholder={"Insira seu E-mail"}/>
                <input type="password" placeholder={"Insira sua Senha"}/>
                <input type="password" placeholder={"Confirme sua Senha"}/>
                <input type="date" placeholder={"Insira sua Data de Nascimento"}/>
                <input type="text" placeholder={"Insira seu CPF"}/>
                <button>Cadastrar</button>
            </div>
        </div>
    )
}