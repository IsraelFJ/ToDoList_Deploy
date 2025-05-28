import { useState } from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";
import useMensagem from '../../hooks/useMensagem';
import MensagemFeedback from '../MensagemFeedback';
import logo from '../../assets/images/logo.png';
import axios from 'axios';

function TarefaCadastro() {
    const [nome, setNome] = useState('');
    const [nomeTarefa, setNomeTarefa] = useState('');
    const [prioridade, setPrioridade] = useState('BAIXA'); // default, mudar se quiser
    const [concluida, setConcluida] = useState(false);
    const [descricao, setDescricao] = useState(''); // Novo estado para descrição
    const navigate = useNavigate();
    const { exibirMensagem , mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem();

    const cadastrarTarefa = async () => {
        try {
            const response = await axios.post('https://todolist-deploy-vinp.onrender.com/usuarios', {
                nome,
                nomeTarefa,
                prioridade,
                concluida,
                descricao  // Enviando a descrição junto com os outros dados
            });
            exibirMensagem(response.data.mensagem || 'Tarefa cadastrada com sucesso!', 'sucesso');
            setNome('');
            setNomeTarefa('');
            setPrioridade('BAIXA');
            setConcluida(false);
            setDescricao('');  // Limpando a descrição
            navigate('/tarefas'); // ajusta a rota se precisar
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
            <h2>Crie sua tarefa</h2>
            <form onSubmit={(e) => {e.preventDefault(); cadastrarTarefa()}}>
                <input 
                    type="text"
                    id="nome"
                    placeholder="Nome do Usuário"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input 
                    type="text"
                    id="nomeTarefa"
                    placeholder="Nome da Tarefa"
                    value={nomeTarefa}
                    onChange={(e) => setNomeTarefa(e.target.value)}
                    required
                />

                <label htmlFor="prioridade">Prioridade:</label>
                <select
                    id="prioridade"
                    value={prioridade}
                    onChange={(e) => setPrioridade(e.target.value)}
                    required
                >
                    <option value="BAIXA">Baixa</option>
                    <option value="MEDIA">Média</option>
                    <option value="ALTA">Alta</option>
                </select>

                <label>
                    <input 
                        type="checkbox" 
                        checked={concluida} 
                        onChange={() => setConcluida(!concluida)} 
                    />
                    Tarefa concluída
                </label>

                {/* Campo de Descrição */}
                <textarea
                    id="descricao"
                    placeholder="Descreva sua tarefa aqui..."
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    rows={5} // Definindo o tamanho da caixa
                    required
                />

                <button onClick={() => navigate('/usuarios')} className="link-pagina-tarefa">Criar</button>
            </form>

            <button onClick={() => navigate('/')} className="link-pagina-incial">
               Sair
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

export default TarefaCadastro;
