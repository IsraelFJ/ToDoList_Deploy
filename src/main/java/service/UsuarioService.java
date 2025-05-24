package service;

import model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import repository.UsuarioRepository;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public Usuario salvar(Usuario usuario) {
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        return usuarioRepository.save(usuario);
    }

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public Usuario criarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }

    public Optional<Usuario> buscarPorId(Long id) {
        return usuarioRepository.findById(id);
    }

    public Optional<Map<String, Object>> atualizarUsuario(Long id, Usuario novoUsuario) {
        return usuarioRepository.findById(id).map(usuario -> {
            usuario.setUsername(novoUsuario.getUsername());
            usuario.setEmail(novoUsuario.getEmail());
            usuario.setPassword(novoUsuario.getPassword());
            usuario.setNomeCompleto(novoUsuario.getNomeCompleto());
            usuario.setRole(novoUsuario.getRole());
            usuarioRepository.save(usuario);
            return Map.of("mensagem", "Usuário atualizado com sucesso");
        });
    }

    public Map<String, Object> deletarUsuario(Long id) {
        boolean existe = usuarioRepository.existsById(id);
        if (existe) {
            usuarioRepository.deleteById(id);
            return Map.of("mensagem", "Usuário deletado com sucesso");
        } else {
            return Map.of("erro", "Usuário não encontrado");
        }
    }

}
