package com.limaisaias.unimedapi.service;

import com.limaisaias.unimedapi.model.Plano;

import java.util.List;
import java.util.Optional;

public interface PlanoService {
    Plano salvar(Plano plano);

    Optional<Plano> buscarPorId(Long id);

    void deletarPorId(Long id);

    List<Plano> listarTodos();
}
