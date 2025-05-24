package controller;

import model.Prioridade;
import model.Tarefa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.TarefaService;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/tarefas")
public class TarefaController {

    private final TarefaService tarefaService;

    @Autowired
    public TarefaController(TarefaService tarefaService) {
        this.tarefaService = tarefaService;
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> criarTarefa(@RequestBody Tarefa tarefa) {
        return ResponseEntity.ok((Map<String, Object>) tarefaService.criarTarefa(tarefa));
    }

    @GetMapping
    public ResponseEntity<List<Tarefa>> listarTarefas() {
        return ResponseEntity.ok(tarefaService.listarTarefas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable Long id) {
        return tarefaService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(404).body((Tarefa) Map.of("erro", "Tarefa não encontrada")));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> atualizarTarefa(@PathVariable Long id, @RequestBody Tarefa tarefa) {
        return tarefaService.atualizarTarefa(id, tarefa)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(404).body((Tarefa) Map.of("erro", "Tarefa não encontrada")));
    }

    @PatchMapping("/{id}/concluir")
    public ResponseEntity<?> concluirTarefa(@PathVariable Long id) {
        return tarefaService.concluirTarefa(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(404).body((Tarefa) Map.of("erro", "Tarefa não encontrada")));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deletarTarefa(@PathVariable Long id) {
        return (ResponseEntity) ResponseEntity.ok();
    }

    @GetMapping("/prioridade")
    public ResponseEntity<List<Tarefa>> buscarPorPrioridade(@RequestParam Prioridade prioridade) {
        return ResponseEntity.ok(tarefaService.buscarPorPrioridade(prioridade));
    }

    @GetMapping("/concluidas")
    public ResponseEntity<List<Tarefa>> listarConcluidas() {
        return ResponseEntity.ok(tarefaService.listarConcluidas());
    }

    @GetMapping("/usuario/{usuarioId}")
    public ResponseEntity<List<Tarefa>> listarPorUsuario(@PathVariable Long usuarioId) {
        return ResponseEntity.ok(tarefaService.listarPorUsuario(usuarioId));
    }
}