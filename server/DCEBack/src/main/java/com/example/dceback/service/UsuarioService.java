package com.example.dceback.service;

import com.example.dceback.domain.TipoUsuario;
import com.example.dceback.domain.Usuario;

import java.util.List;
import java.util.Optional;

public interface UsuarioService{

    Usuario saveUsuario(Usuario usuario);
    TipoUsuario saveTipoUsuario(TipoUsuario tipoUsuario);
    void addTipoUsuarioParaUsuario(String email, String tipoUsuarioNome);
//    Usuario getUsuario(String email);
    Optional<Usuario> findByEmail(String email);
    List<Usuario> getUsuarios();
    Optional<Usuario> findById(Long id);
    Optional<Usuario> findUsuarioByEmail(String email);
}