package com.limaisaias.unimedapi.service.impl;

import com.limaisaias.unimedapi.model.Usuario;
import com.limaisaias.unimedapi.repository.UsuarioRepository;
import com.limaisaias.unimedapi.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    UsuarioRepository repository;

    @Override
    public Usuario salvarUsuario(Usuario usuario) {
        return repository.save(usuario);
    }

    @Override
    public Optional<Usuario> buscarUsuarioPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public List<Usuario> buscarTodosUsuarios() {
        return repository.findAll();
    }

    @Override
    public void deletarUsuarioPorId(Long id) {
        repository.deleteById(id);
    }
}
