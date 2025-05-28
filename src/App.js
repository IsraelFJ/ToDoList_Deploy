import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaHome from './pages/PaginaHome';
import PaginaCadastro from './pages/Cadastro';
import PaginaListaUsuarios from './pages/Lista';
import PaginaToDoList from './pages/Tarefas';  // Importando a página de tarefas
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaHome />} />
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/usuarios" element={<PaginaListaUsuarios />} />
        <Route path="/tarefas" element={<PaginaToDoList />} /> {/* Rota para página de tarefas */}
      </Routes>
    </Router>
  );
}

export default App;
