package com.limaisaias.unimedapi.service.impl;

import com.limaisaias.unimedapi.model.Beneficiario;
import com.limaisaias.unimedapi.repository.BeneficiarioRepository;
import com.limaisaias.unimedapi.service.BeneficiarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BeneficiarioServiceImpl implements BeneficiarioService {

    @Autowired
    private BeneficiarioRepository beneficiarioRepository;

    @Autowired
    public BeneficiarioServiceImpl(BeneficiarioRepository beneficiarioRepository) {
        this.beneficiarioRepository = beneficiarioRepository;
    }

    @Override
    public Beneficiario salvarBeneficiario(Beneficiario beneficiario) {
        return beneficiarioRepository.save(beneficiario);
    }

    @Override
    public Optional<Beneficiario> buscarBeneficiarioPorId(Long id) {
        return beneficiarioRepository.findById(id);
    }

    @Override
    public List<Beneficiario> buscarTodosBeneficiarios() {
        return beneficiarioRepository.findAll();
    }

    @Override
    public void deletarBeneficiarioPorId(Long id) {
        beneficiarioRepository.deleteById(id);
    }
}