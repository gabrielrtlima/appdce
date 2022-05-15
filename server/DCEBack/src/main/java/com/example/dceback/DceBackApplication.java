package com.example.dceback;

import com.example.dceback.domain.TipoUsuario;
import com.example.dceback.domain.Usuario;
import com.example.dceback.service.UsuarioService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class DceBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(DceBackApplication.class, args);
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

//    @Bean
//    CommandLineRunner run(UsuarioService usuarioService) {
//        return args -> {
//            usuarioService.saveTipoUsuario(new TipoUsuario(null, "Administrador"));
//            usuarioService.saveTipoUsuario(new TipoUsuario(null, "Normal"));
//
//            usuarioService.saveUsuario(new Usuario(null, "Gabriel", "gabriel@gmail.com", "1234", "12345567800",
//                    "98888898", new ArrayList<>()));
//            usuarioService.saveUsuario(new Usuario(null, "Admin", "admin@gmail.com", "1234", "12345567800",
//                    "98888898", new ArrayList<>()));
//
//            usuarioService.addTipoUsuarioParaUsuario("gabriel@gmail.com", "Normal");
//            usuarioService.addTipoUsuarioParaUsuario("admin@gmail.com", "Administrador");
//        };
//    }
}
