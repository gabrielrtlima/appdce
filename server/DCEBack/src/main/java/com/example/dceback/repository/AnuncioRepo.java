package com.example.dceback.repository;

import com.example.dceback.domain.Anuncio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnuncioRepo extends JpaRepository<Anuncio, Long> {
}
