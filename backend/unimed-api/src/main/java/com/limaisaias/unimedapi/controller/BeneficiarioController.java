package com.limaisaias.unimedapi.controller;

import com.limaisaias.unimedapi.model.Beneficiario;
import com.limaisaias.unimedapi.service.BeneficiarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/beneficiarios")
public class BeneficiarioController {

    @Autowired
    private BeneficiarioService beneficiarioService;

    public BeneficiarioController(BeneficiarioService beneficiarioService) {
        this.beneficiarioService = beneficiarioService;
    }

    @PostMapping
    public ResponseEntity<Beneficiario> criarBeneficiario(@RequestBody Beneficiario beneficiario) {
        Beneficiario novoBeneficiario = beneficiarioService.salvarBeneficiario(beneficiario);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoBeneficiario);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Beneficiario> buscarBeneficiarioPorId(@PathVariable Long id) {
        Optional<Beneficiario> beneficiario = beneficiarioService.buscarBeneficiarioPorId(id);
        if (beneficiario.isPresent()) {
            return ResponseEntity.ok(beneficiario.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarBeneficiarioPorId(@PathVariable Long id) {
        beneficiarioService.deletarBeneficiarioPorId(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<Beneficiario>> listarTodosBeneficiarios() {
        List<Beneficiario> beneficiarios = beneficiarioService.buscarTodosBeneficiarios();
        return ResponseEntity.ok(beneficiarios);
    }
}
