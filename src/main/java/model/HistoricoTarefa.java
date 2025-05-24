package model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class HistoricoTarefa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String acao; // Ex: "CRIADA", "EDITADA", "CONCLUIDA"

    private LocalDateTime data;

    @ManyToOne
    private Tarefa tarefa;

    @ManyToOne
    private Usuario usuario;
}


