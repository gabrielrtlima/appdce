package com.example.dceback.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

import static javax.persistence.FetchType.EAGER;

@Entity @Data @NoArgsConstructor @AllArgsConstructor
public class Usuario {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nome;

    @Column(unique = true)
    private String email;
    private String senha;

    private String CPF;
    private String telefone;

    @ManyToMany(fetch = EAGER)
    private Collection<TipoUsuario> tipoUsuario = new ArrayList<>();

}
