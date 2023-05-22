package com.limaisaias.unimedapi.repository;

import com.limaisaias.unimedapi.model.Plano;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanoRepository extends JpaRepository<Plano, Long> {
}
