import { useState } from "react";
import './styles.css'
import { useNavigate } from "react-router-dom";
import useMensagem from '../../hooks/useMensagem';
import MensagemFeedback from '../MensagemFeedback';
import logo from '../../assets/images/logo.png';
import axios from 'axios';

function FormularioCadastro() {
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [idade, setIdade] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [posicao, setPosicao] = useState('');
    const [numeroDaCamisa, setNumeroDaCamisa] = useState('');
    const navigate = useNavigate();
    const { exibirMensagem , mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem();

    const cadastrarUsuario = async () => {
        try {
            const response = await axios.post('https://back-deploy-7q2n.onrender.com/usuarios', {nome, sexo, idade, altura, peso, posicao, numeroDaCamisa});
            exibirMensagem(response.data.mensagem || 'Usuário cadastrado com sucesso!', 'sucesso');
            setNome('');
            setSexo('');
            setIdade('');
            setAltura('');
            setPeso('');
            setPosicao('');
            setNumeroDaCamisa('');
            navigate('/usuarios'); // Navegar para a lista de usuários após o cadastro
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
            <h2>Cadastro de Jogadores</h2>
            <form onSubmit={(e) => {e.preventDefault(); cadastrarUsuario()}}>
                <input 
                    type="text"
                    id="nome"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input 
                    type="number"
                    id="idade"
                    placeholder="Idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    required
                />
                <input 
                    type="text"
                    id="altura"
                    placeholder="Altura"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    required
                />
                <input 
                    type="text"
                    id="peso"
                    placeholder="Peso"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    required
                />
                <input 
                    type="text"
                    id="posicao"
                    placeholder="Posição"
                    value={posicao}
                    onChange={(e) => setPosicao(e.target.value)}
                    required
                />
                <input 
                    type="number"
                    id="numeroDaCamisa"
                    placeholder="Numero da Camisa"
                    value={numeroDaCamisa}
                    onChange={(e) => setNumeroDaCamisa(e.target.value)}
                    required
                />
                <div className="sexo-container">
                    <label>Sexo</label>
                    <label>
                        <input
                            type="radio"
                            id="masculino"
                            name="sexo"
                            value="MASCULINO"
                            checked={sexo === "MASCULINO"}
                            onChange={(e) => setSexo(e.target.value)}
                            required
                        />
                        Masculino
                    </label>
                    <label>
                        <input
                            type="radio"
                            id="feminino"
                            name="sexo"
                            value="FEMININO"
                            checked={sexo === "FEMININO"}
                            onChange={(e) => setSexo(e.target.value)}
                            required
                        />
                        Feminino
                    </label>
                </div>
                
                <button type="submit">Cadastrar</button>
            </form>
           
            <button onClick={() => navigate('/usuarios')} className="link-usuarios">
                Ver usuários cadastrados
            </button>
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
