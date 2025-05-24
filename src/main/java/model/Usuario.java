package model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.util.List;

@Entity
@Table(name = "tab_usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    @NotBlank(message = "O Campo é obrigatorio")
    private String username;

    @NotBlank(message = "Senha é obrigatória")
    private String password;

    private String nomeCompleto;

    private String role = "USER"; // pode usar para diferenciar permissões depois

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
    private List<Tarefa> tarefas;

}
