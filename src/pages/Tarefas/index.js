

import ToDoList from '../../components/toDoList'  // ajuste o nome do componente e caminho conforme seu arquivo real
import './styles.css';

function PaginaToDoList() {
    return (
        <div className='to-do-list'>
            <ToDoList />
        </div>
    );
}

export default PaginaToDoList;
