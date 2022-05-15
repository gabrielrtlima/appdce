package com.example.dceback.service;

import com.example.dceback.domain.Anuncio;
import com.example.dceback.repository.AnuncioRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class AnuncioServiceImpl implements AnuncioService {

    private final AnuncioRepo anuncioRepo;

    @Override
    public Anuncio save(Anuncio anuncio) {
        log.info("Salvando anuncio: {}", anuncio);
        return anuncioRepo.save(anuncio);
    }

    @Override
    public List<Anuncio> findAll() {
        log.info("Buscando todos os anuncios");
        return anuncioRepo.findAll();
    }

    @Override
    public Anuncio findById(Long id) {
        log.info("Buscando anuncio por id: {}", id);
        return anuncioRepo.findById(id).orElse(null);
    }

    @Override
    public void delete(Long id) {
        log.info("Deletando anuncio por id: {}", id);
        anuncioRepo.deleteById(id);
    }
}
