// src\pages\Lista\index.js

import ListaDeUsuarios from '../../components/ListaDeUsuarios'
import { useNavigate } from 'react-router-dom'
import './styles.css'

function PaginaListaTarefas() {
    const navigate = useNavigate()
    
return (
        <div className='pagina-lista-usuarios'>
            <div className='container'>
                <h2>Lista de Tarefas</h2>
                <ListaDeUsuarios />
                <button onClick={() => navigate('/tarefas')} className='link-voltar'>
                    Cadastrar nova Tarefa
                </button>
               <button onClick={() => navigate('/')} className="link-Pagina-inicial">
               Sair
            </button>
            </div>
        </div>
    )
}

export default PaginaListaTarefas