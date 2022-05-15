package com.example.dceback.repository;

import com.example.dceback.domain.TipoUsuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TipoUsuarioRepo extends JpaRepository<TipoUsuario, Long> {

    TipoUsuario findByName(String nome);
}
