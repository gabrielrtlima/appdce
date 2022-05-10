import HeaderLogado from '../HeaderLogado';
import './index.css';

export default function EditarPerfil() {
    return (
        <>
            <HeaderLogado />
            <div className="editar-perfil">
                <h1>Configurações da Conta</h1>
                <div className="container-editar">
                    <input type="text" name="nome" id="nome" placeholder='Seu nome'/>
                    <input type="email" name="email" id="email" placeholder='Seu e-mail'/>
                    <input type="password" name="senha" id="senha" placeholder='Sua senha'/>
                    <input type="date" name="data_nascimento" id="data_nascimento" placeholder='Data de nascimento'/>
                    <input type="text" name="cpf" id="cpf" placeholder='Seu CPF'/>
                    <div className='container-botao'>
                        <button className='botao-excluir'>Excluir Conta</button>
                        <button className='botao-atualizar'>Salvar</button>
                    </div>
                </div>
            </div>
        </>
    );
}