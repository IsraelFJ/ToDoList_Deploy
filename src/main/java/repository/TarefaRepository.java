package repository;

import model.Tarefa;
import model.Prioridade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Long> {

    // Busca por nome da tarefa (retorna 1 resultado ou vazio)
    Optional<Tarefa> findByNomeTarefa(String nomeTarefa);

    // Busca todas as tarefas de um usuário
    List<Tarefa> findByUsuarioId(Long usuarioId);

    // Busca tarefas concluídas
    List<Tarefa> findByConcluidaTrue();

    // Busca por prioridade
    List<Tarefa> findByPrioridade(Prioridade prioridade);
}
