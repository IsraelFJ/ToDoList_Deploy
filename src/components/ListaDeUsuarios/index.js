// src\components\ListaDeUsuarios\index.js

import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css'

function ListaDeUsuarios() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        const carregarUsuarios = async () => {
            try {
                const response = await axios.get('https://todolist-deploy-vinp.onrender.com/usuarios')
                setUsuarios(response.data)
            } catch (error) {
                alert('Erro ao buscar usuários: ', error)
                setUsuarios([])
            }
        }
        carregarUsuarios()
    }, [])

    return (
        <ul id="listaUsurios" className="lista-usuarios">
            {usuarios.length === 0 ? (
                <li>Nenhuma Tarefa encontrado.</li>
            ) : (
                usuarios.map( usuario => (
                    <li key={usuario.id}>
                        <strong>Nome de Usuario: </strong> {usuario.username}<br />
                        <strong>Nome Completo: </strong> {usuario.nomeCompleto}<br />
                        <strong>E-Mail: </strong> {usuario.email}<br />
                        <strong>Altura: </strong> {usuario.altura}<br />
                        <strong>Peso: </strong> {usuario.peso}<br />
                        <strong>Posicão: </strong> {usuario.posicao}<br />
                        <strong>Numero da Camisa: </strong> {usuario.numeroDaCamisa}       
                    </li>
                ))
            )}
        </ul>
    )
    
}

export default ListaDeUsuarios
