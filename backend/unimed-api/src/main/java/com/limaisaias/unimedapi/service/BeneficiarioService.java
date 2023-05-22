package com.limaisaias.unimedapi.service;

import com.limaisaias.unimedapi.model.Beneficiario;

import java.util.List;
import java.util.Optional;

public interface BeneficiarioService {

    Beneficiario salvarBeneficiario(Beneficiario beneficiario);

    Optional<Beneficiario> buscarBeneficiarioPorId(Long id);

    List<Beneficiario> buscarTodosBeneficiarios();

    void deletarBeneficiarioPorId(Long id);
}

