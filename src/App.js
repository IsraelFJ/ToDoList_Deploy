import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaHome from './pages/PaginaHome';
import PaginaCadastro from './pages/Cadastro';  // Verifique se o caminho e nome do arquivo estão corretos
import PaginaListaUsuarios from './pages/Lista';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaHome />} />
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/usuarios" element={<PaginaListaUsuarios />} />
      </Routes>
    </Router>
  );
}

export default App;
