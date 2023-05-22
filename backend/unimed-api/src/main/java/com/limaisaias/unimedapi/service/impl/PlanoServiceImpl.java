package com.limaisaias.unimedapi.service.impl;

import com.limaisaias.unimedapi.model.Plano;
import com.limaisaias.unimedapi.repository.PlanoRepository;
import com.limaisaias.unimedapi.service.PlanoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlanoServiceImpl implements PlanoService {

    @Autowired
    private final PlanoRepository planoRepository;

    public PlanoServiceImpl(PlanoRepository planoRepository) {
        this.planoRepository = planoRepository;
    }

    @Override
    public Plano salvar(Plano plano) {
        return planoRepository.save(plano);
    }

    @Override
    public Optional<Plano> buscarPorId(Long id) {
        return planoRepository.findById(id);
    }

    @Override
    public void deletarPorId(Long id) {
        planoRepository.deleteById(id);
    }

    @Override
    public List<Plano> listarTodos() {
        return planoRepository.findAll();
    }
}

