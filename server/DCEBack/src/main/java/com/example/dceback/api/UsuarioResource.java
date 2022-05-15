package com.example.dceback.api;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.dceback.domain.TipoUsuario;
import com.example.dceback.domain.Usuario;
import com.example.dceback.service.UsuarioService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.*;
import java.util.stream.Collectors;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController @RequestMapping("/api")
@RequiredArgsConstructor
@EnableWebSecurity
public class UsuarioResource {

    @Autowired
    private final UsuarioService usuarioService;

    @GetMapping("/usuarios")
    public ResponseEntity<List<Usuario>>getUsuarios() {
        return ResponseEntity.ok().body(usuarioService.getUsuarios());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/usuario")
    public ResponseEntity<Usuario> saveUsuario(@RequestBody Usuario usuario) {
//        URI uri = URI.create(ServletUriComponentsBuilder.fromContextPath(null).path("/api/usuario").toUriString());
//        return ResponseEntity.created(uri).body(usuarioService.saveUsuario(usuario));
        return ResponseEntity.ok(usuarioService.saveUsuario(usuario));
    }

    @GetMapping("/usuarios/{id}")
    public ResponseEntity<Optional<Usuario>> getUsuarioId(@PathVariable Long id) {
        return ResponseEntity.ok(usuarioService.findById(id));
    }

    @GetMapping("/usuario/{email}")
    public ResponseEntity<Optional<Usuario>> getUsuarioPorEmail(@PathVariable String email) {
        return ResponseEntity.ok(usuarioService.findByEmail(email));
    }

//    @PostMapping("/usuario/email")
//    public ResponseEntity<Optional<Usuario>> getUsuarioEmail(@RequestBody String email) {
//        return ResponseEntity.ok(usuarioService.findUsuarioByEmail(email));
//    }

    @PostMapping("/tipousuario/save")
    public ResponseEntity<TipoUsuario> saveTipoUsuario(@RequestBody TipoUsuario tipoUsuario) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromContextPath(null).path("/api/tipousuario/save").toUriString());
        return ResponseEntity.created(uri).body(usuarioService.saveTipoUsuario(tipoUsuario));
    }

    @PostMapping("/tipousuario/addtouser")
    public ResponseEntity<?> adicionarAoUsuario(@RequestBody tipoParaUsuario form) {
        usuarioService.addTipoUsuarioParaUsuario(form.getEmail(), form.getTipoUsuarioNome());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/token/refresh")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String authorizationHeader = request.getHeader("Authorization");
        if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            try{
                String refresh_token = authorizationHeader.substring(7);
                Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
                JWTVerifier verifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = verifier.verify(refresh_token);
                String username = decodedJWT.getSubject();
                Usuario usuario = usuarioService.findByEmail(username).get();
                String acces_token = com.auth0.jwt.JWT.create()
                        .withSubject(usuario.getEmail())
                        .withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 1000))
                        .withIssuer(request.getRequestURL().toString())
                        .withClaim("tipo", usuario.getTipoUsuario().stream().map(TipoUsuario::getName).collect(Collectors.joining()))
                        .sign(algorithm);
//        response.setHeader("acces_token", token);
//        response.setHeader("refresh_token", refresh_token);
                Map<String, String> map = new HashMap<>();
                map.put("token", acces_token);
                map.put("refresh_token", refresh_token);
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), map);
            } catch(Exception e) {
                response.setHeader("error", e.getMessage());
                response.setStatus(403);
                Map<String, String> map = new HashMap<>();
                map.put("error", e.getMessage());
                response.setContentType(MimeTypeUtils.APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), map);
            }

        }else {
            throw new RuntimeException("Refresh token is missing");
        }
    }

}

@Data
class tipoParaUsuario {
    private String email;
    private String tipoUsuarioNome;
}
