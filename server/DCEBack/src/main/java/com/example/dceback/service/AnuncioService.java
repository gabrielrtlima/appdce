package com.example.dceback.service;

import com.example.dceback.domain.Anuncio;

import java.util.List;

public interface AnuncioService {

    Anuncio save(Anuncio anuncio);

    List<Anuncio> findAll();

    Anuncio findById(Long id);

    void delete(Long id);

}
