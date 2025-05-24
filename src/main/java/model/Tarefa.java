package model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class Tarefa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O Campo é obrigatório")
    private String nome; // ou título da tarefa

    @NotBlank(message = "O Campo é obrigatório")
    private String nomeTarefa; // se isso for um subtítulo, tudo bem, senão você pode renomear pra "descricao"

    private String descricao;

    @Enumerated(EnumType.STRING)
    private Prioridade prioridade;

    private LocalDate dataInicio;

    private LocalDate dataFim;

    private boolean concluida = false;

    private LocalDateTime dataConclusao;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario; // relacionamento com quem criou

    public Tarefa() {
    }

    public Tarefa(Long id, String nome, String nomeTarefa, String descricao, Prioridade prioridade, LocalDate dataInicio, LocalDate dataFim, boolean concluida, LocalDateTime dataConclusao, Usuario usuario) {
        this.id = id;
        this.nome = nome;
        this.nomeTarefa = nomeTarefa;
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.concluida = concluida;
        this.dataConclusao = dataConclusao;
        this.usuario = usuario;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotBlank(message = "O Campo é obrigatório") String getNome() {
        return nome;
    }

    public void setNome(@NotBlank(message = "O Campo é obrigatório") String nome) {
        this.nome = nome;
    }

    public @NotBlank(message = "O Campo é obrigatório") String getNomeTarefa() {
        return nomeTarefa;
    }

    public void setNomeTarefa(@NotBlank(message = "O Campo é obrigatório") String nomeTarefa) {
        this.nomeTarefa = nomeTarefa;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Prioridade getPrioridade() {
        return prioridade;
    }

    public void setPrioridade(Prioridade prioridade) {
        this.prioridade = prioridade;
    }

    public LocalDate getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(LocalDate dataInicio) {
        this.dataInicio = dataInicio;
    }

    public LocalDate getDataFim() {
        return dataFim;
    }

    public void setDataFim(LocalDate dataFim) {
        this.dataFim = dataFim;
    }

    public boolean isConcluida() {
        return concluida;
    }

    public void setConcluida(boolean concluida) {
        this.concluida = concluida;
    }

    public LocalDateTime getDataConclusao() {
        return dataConclusao;
    }

    public void setDataConclusao(LocalDateTime dataConclusao) {
        this.dataConclusao = dataConclusao;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
