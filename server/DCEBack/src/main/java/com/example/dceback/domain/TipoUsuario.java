package com.example.dceback.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class TipoUsuario {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

}
