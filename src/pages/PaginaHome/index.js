import { useNavigate, Link } from 'react-router-dom';
import './styles.css';

function PaginaHome() {
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

                <Link to="/cadastro" className='cadastrar-novo-usuario'>
                    Cadastrar Novo Usuário
                </Link>

            </div>
        </div>
    );
}

export default PaginaHome;
