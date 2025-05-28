import { useState } from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";
import useMensagem from '../../hooks/useMensagem';
import MensagemFeedback from '../MensagemFeedback';
import logo from '../../assets/images/logo.png';
import axios from 'axios';

function FormularioCadastro() {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfSenha, setMostrarConfSenha] = useState(false);
    const navigate = useNavigate();
    const { exibirMensagem , mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem();

    const cadastrarUsuario = async () => {
        try {
            const response = await axios.post('https://todolist-deploy-vinp.onrender.com/usuarios', {
                username, email, senha, confSenha, nomeCompleto 
            });
            exibirMensagem(response.data.mensagem || 'Usuário cadastrado com sucesso!', 'sucesso');
            setUserName('');
            setEmail('');
            setSenha('');
            setConfSenha('');
            setNomeCompleto('');
            navigate('/usuarios');
        } catch (error) {
            let erroMsg = 'Erro ao conectar ao servidor.';
            if (error.response && error.response.data) {
                erroMsg = error.response.data.mensagem;
                if (error.response.data.erros) {
                    erroMsg += ' ' + Object.values(error.response.data.erros).join(', ');
                }
            }
            exibirMensagem(erroMsg, 'erro');
        }
    }

    return (
        <div className="container">
            <img src={logo} alt="Logo da empresa" />
            <h2>Bem vindo! Cadastre seus dados</h2>
            <form onSubmit={(e) => {e.preventDefault(); cadastrarUsuario()}}>
                <input 
                    type="text"
                    id="username"
                    placeholder="Nome de Usuario"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
                <input 
                    type="text"
                    id="nomeCompleto"
                    placeholder="Nome Completo"
                    value={nomeCompleto}
                    onChange={(e) => setNomeCompleto(e.target.value)}
                    required
                />       
                <input 
                    type="text"
                    id="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                {/* Campo de senha com toggle */}
                <div className="senha-container">
                    <input 
                        type={mostrarSenha ? "text" : "password"}
                        id="senha"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                    <span
                        className="toggle-password"
                        onClick={() => setMostrarSenha(!mostrarSenha)}
                    >
                        {mostrarSenha ? '🙈' : '👁️'}
                    </span>
                </div>

                {/* Campo de confirmação de senha com toggle */}
                <div className="senha-container">
                    <input 
                        type={mostrarConfSenha ? "text" : "password"}
                        id="confSenha"
                        placeholder="Confirmar Senha"
                        value={confSenha}
                        onChange={(e) => setConfSenha(e.target.value)}
                        required
                    />
                    <span
                        className="toggle-password"
                        onClick={() => setMostrarConfSenha(!mostrarConfSenha)}
                    >
                        {mostrarConfSenha ? '🙈' : '👁️'}
                    </span>
                </div>
                
                <button type="submit">Cadastrar</button>
            </form>
           
            <button onClick={() => navigate('/')} className="link-pagina-incial">
               Home
            </button>

            <MensagemFeedback
                mensagem={mensagem}
                tipo={tipoMensagem}
                visivel={visivel}
                onClose={fecharMensagem}
            />
        </div>
    )
}

export default FormularioCadastro;
