import { useNavigate } from 'react-router-dom';
import './styles.css';

function PaginaHome() {  // Aqui, o nome do componente deve ser PaginaHome
    const navigate = useNavigate();

    return (
        <div className='pagina-home'>
            <div className='home-container'>
                <h1>My ToDo Login</h1>
                
                <input type="text" placeholder='Login'/>
                <input type="password" placeholder='Password'/>
                <button onClick={() => navigate('/usuarios')} className='telade login'>
                    Login
                </button>
                <button onClick={() => navigate('/cadastro')} className='cadastrar-novo-usuario'>
                    Cadastrar Novo usuario
                </button>
            </div>
        </div>
    );
}

export default PaginaHome;  // Corrigir o nome aqui também para exportar PaginaHome
