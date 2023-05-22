package com.limaisaias.unimedapi.repository;

import com.limaisaias.unimedapi.model.Beneficiario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BeneficiarioRepository extends JpaRepository<Beneficiario, Long> {
}
