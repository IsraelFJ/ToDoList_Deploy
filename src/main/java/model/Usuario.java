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

    @NotBlank(message = "O email é obrigatorio")
    private String email;

    @NotBlank(message = "Senha é obrigatória")
    private String password;

    private String nomeCompleto;

    private String role = "USER"; // pode usar para diferenciar permissões depois

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
    private List<Tarefa> tarefas;

    public Usuario() {
    }

    public Usuario(Long id, String username, String email, String password, String nomeCompleto, String role, List<Tarefa> tarefas) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.nomeCompleto = nomeCompleto;
        this.role = role;
        this.tarefas = tarefas;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotBlank(message = "O Campo é obrigatorio") String getUsername() {
        return username;
    }

    public void setUsername(@NotBlank(message = "O Campo é obrigatorio") String username) {
        this.username = username;
    }

    public @NotBlank(message = "O email é obrigatorio") String getEmail() {
        return email;
    }

    public void setEmail(@NotBlank(message = "O email é obrigatorio") String email) {
        this.email = email;
    }

    public @NotBlank(message = "Senha é obrigatória") String getPassword() {
        return password;
    }

    public void setPassword(@NotBlank(message = "Senha é obrigatória") String password) {
        this.password = password;
    }

    public String getNomeCompleto() {
        return nomeCompleto;
    }

    public void setNomeCompleto(String nomeCompleto) {
        this.nomeCompleto = nomeCompleto;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<Tarefa> getTarefas() {
        return tarefas;
    }

    public void setTarefas(List<Tarefa> tarefas) {
        this.tarefas = tarefas;
    }
}
