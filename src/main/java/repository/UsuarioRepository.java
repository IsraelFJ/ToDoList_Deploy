package repository;

import model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    // Buscar por username (útil para login ou validação de cadastro)
    Optional<Usuario> findByUsername(String username);

    // Buscar por email (evitar cadastro duplicado, por exemplo)
    Optional<Usuario> findByEmail(String email);
}
