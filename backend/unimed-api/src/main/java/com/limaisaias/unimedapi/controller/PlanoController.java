package com.limaisaias.unimedapi.controller;

import com.limaisaias.unimedapi.model.Plano;
import com.limaisaias.unimedapi.service.PlanoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/planos")
public class PlanoController {

    @Autowired
    private PlanoService planoService;

    @PostMapping
    public ResponseEntity<Plano> criarPlano(@RequestBody Plano plano) {
        Plano novoPlano = planoService.salvar(plano);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoPlano);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Plano> buscarPlanoPorId(@PathVariable Long id) {
        Optional<Plano> plano = planoService.buscarPorId(id);
        return plano.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarPlanoPorId(@PathVariable Long id) {
        planoService.deletarPorId(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Plano> atualizarPlano(@PathVariable Long id, @RequestBody Plano plano) {
        Optional<Plano> planoExistente = planoService.buscarPorId(id);

        if (planoExistente.isPresent()) {
            Plano planoAtualizado = planoService.salvar(plano);
            return ResponseEntity.ok(planoAtualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Plano>> listarTodosPlanos() {
        List<Plano> planos = planoService.listarTodos();
        return ResponseEntity.ok(planos);
    }
}