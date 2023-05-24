package com.limaisaias.unimedapi.controller;

import com.limaisaias.unimedapi.model.Plano;
import com.limaisaias.unimedapi.model.Usuario;
import com.limaisaias.unimedapi.service.UsuarioService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @PostMapping
    public ResponseEntity<Usuario> criarUsuario(@RequestBody Usuario usuario) {
        Usuario novoUsuario = usuarioService.salvarUsuario(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoUsuario);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> buscarUsuarioPorId(@PathVariable Long id) {
        Optional<Usuario> usuario = usuarioService.buscarUsuarioPorId(id);
        if (usuario.isPresent()) {
            return ResponseEntity.ok(usuario.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarUsuarioPorId(@PathVariable Long id) {
        usuarioService.deletarUsuarioPorId(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> listarTodosUsuarios() {
        List<Usuario> usuarios = usuarioService.buscarTodosUsuarios();
        return ResponseEntity.ok(usuarios);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> atualizarUsuario(@PathVariable Long id, @RequestBody Usuario usuario) {
        Optional<Usuario> usuarioOptional = usuarioService.buscarUsuarioPorId(id);

        if (usuarioOptional.isPresent()) {
            Usuario usuarioAtualizado = usuarioService.salvarUsuario(usuario);
            return ResponseEntity.ok(usuarioAtualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}