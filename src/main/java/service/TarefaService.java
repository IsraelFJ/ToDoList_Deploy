package service;

import model.Prioridade;
import model.Tarefa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.TarefaRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TarefaService {

    @Autowired
    private TarefaRepository tarefaRepository;

    public TarefaService(TarefaRepository tarefaRepository) {
        this.tarefaRepository = tarefaRepository;
    }

    // Criar tarefa
    public Tarefa criarTarefa(Tarefa tarefa) {
        tarefa.setDataInicio(LocalDate.now()); // data atual sem hora
        tarefa.setConcluida(false);
        return tarefaRepository.save(tarefa);
    }

    // Buscar todas as tarefas
    public List<Tarefa> listarTarefas() {
        return tarefaRepository.findAll();
    }

    // Buscar por ID
    public Optional<Tarefa> buscarPorId(Long id) {
        return tarefaRepository.findById(id);
    }

    // Atualizar tarefa
    public Optional<Tarefa> atualizarTarefa(Long id, Tarefa tarefaAtualizada) {
        return tarefaRepository.findById(id).map(tarefa -> {
            tarefa.setNomeTarefa(tarefaAtualizada.getNomeTarefa());
            tarefa.setDescricao(tarefaAtualizada.getDescricao());
            tarefa.setDataFim(tarefaAtualizada.getDataFim());
            tarefa.setPrioridade(tarefaAtualizada.getPrioridade());
            return tarefaRepository.save(tarefa);
        });
    }

    // Marcar como concluída
    public Optional<Tarefa> concluirTarefa(Long id) {
        return tarefaRepository.findById(id).map(tarefa -> {
            tarefa.setConcluida(true);
            tarefa.setDataConclusao(LocalDateTime.now());
            return tarefaRepository.save(tarefa);
        });
    }

    // Deletar tarefa
    public void deletarTarefa(Long id) {
        tarefaRepository.deleteById(id);
    }

    // Buscar por prioridade
    public List<Tarefa> buscarPorPrioridade(Prioridade prioridade) {
        return tarefaRepository.findByPrioridade(prioridade);
    }

    // Buscar tarefas de um usuário
    public List<Tarefa> listarPorUsuario(Long usuarioId) {
        return tarefaRepository.findByUsuarioId(usuarioId);
    }

    // Buscar tarefas concluídas
    public List<Tarefa> listarConcluidas() {
        return tarefaRepository.findByConcluidaTrue();
    }
}
