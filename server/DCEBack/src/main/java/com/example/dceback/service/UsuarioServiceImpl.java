package com.example.dceback.service;

import com.example.dceback.domain.TipoUsuario;
import com.example.dceback.domain.Usuario;
import com.example.dceback.repository.TipoUsuarioRepo;
import com.example.dceback.repository.UsuarioRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service @RequiredArgsConstructor @Transactional @Slf4j
public class UsuarioServiceImpl implements UsuarioService, UserDetailsService {

    @Autowired
    private final UsuarioRepo usuarioRepo;
    private final TipoUsuarioRepo tipoUsuarioRepo;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        /*Usuario usuario = usuarioRepo.findByEmail(username);*/
        Usuario usuario = usuarioRepo.findByEmail(username).get();
        if(usuario == null) {
            log.error("Usuário não encontrado: " + username);
            throw new UsernameNotFoundException("Usuário não encontrado");
        } else {
            log.info("Usuário encontrado: " + username);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        usuario.getTipoUsuario().forEach(tipoUsuario -> authorities.add(new SimpleGrantedAuthority(tipoUsuario.getName())));
        return new org.springframework.security.core.userdetails.User(usuario.getEmail(), usuario.getSenha(), authorities);

    }

    @Override
    public Usuario saveUsuario(Usuario usuario) {
        log.info("Salvando usuário: " + usuario.getEmail());
        usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));
            if(usuarioRepo.existsByEmail(usuario.getEmail())) {
                log.error("Usuário já existe: " + usuario.getEmail());
                throw new RuntimeException("Usuário já existe");
            }
        return usuarioRepo.save(usuario);
    }

    @Override
    public TipoUsuario saveTipoUsuario(TipoUsuario tipoUsuario) {
        log.info("Salvando tipo de usuário: " + tipoUsuario.getName());
        return tipoUsuarioRepo.save(tipoUsuario);
    }

    @Override
    public void addTipoUsuarioParaUsuario(String email, String tipoUsuarioNome) {
        log.info("Adicionando tipo de usuário: " + tipoUsuarioNome + " para usuário: " + email);
        Usuario usuario = usuarioRepo.findByEmail(email).get();
        TipoUsuario tipoUsuario = tipoUsuarioRepo.findByName(tipoUsuarioNome);
        usuario.getTipoUsuario().add(tipoUsuario);
        usuarioRepo.save(usuario);
    }

//    @Override
//    public List<Usuario> getUsuario(String email){
//        log.info("Buscando usuário: " + email);
//        log.info("Usuário encontrado: " + usuarioRepo.findByEmail(email));
//        return usuarioRepo.findByEmail(email);
//    }

    @Override
    public Optional<Usuario> findByEmail(String email) {
        log.info("Buscando usuário: " + email);
        return usuarioRepo.findByEmail(email);
    }

    @Override
    public List<Usuario> getUsuarios() {
        log.info("Buscando todos os usuários");
        return usuarioRepo.findAll();
    }

    @Override
    public Optional<Usuario> findById(Long id) {
        log.info("Buscando usuário por id: " + id);
        return usuarioRepo.findById(id);
    }

    @Override
    public Optional<Usuario> findUsuarioByEmail(String email) {
        log.info("Buscando usuário por email: " + email);
        return usuarioRepo.findUsuariosByEmail(email);
    }

    public Collection<? extends GrantedAuthority> getAuthorities(Usuario usuario) {
        return usuario.getTipoUsuario().stream()
                .map(tipoUsuario -> new SimpleGrantedAuthority(tipoUsuario.getName()))
                .collect(Collectors.toList());
    }

}
