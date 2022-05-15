package com.example.dceback.api;

import com.example.dceback.domain.Anuncio;
import com.example.dceback.service.AnuncioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@EnableWebSecurity
public class AnuncioResource {
    private final AnuncioService anuncioService;

    @PostMapping("/anuncio")
    public ResponseEntity<Anuncio> save(@RequestBody Anuncio anuncio) {
        return ResponseEntity.ok(anuncioService.save(anuncio));
    }

    @GetMapping("/anuncios")
    public ResponseEntity<List<Anuncio>> getAnuncios() {
        return ResponseEntity.ok(anuncioService.findAll());
    }

    @DeleteMapping("/anuncio/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        anuncioService.delete(id);
        return ResponseEntity.noContent().build();
    }
}

