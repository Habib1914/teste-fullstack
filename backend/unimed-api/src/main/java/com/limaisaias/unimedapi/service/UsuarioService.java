package com.limaisaias.unimedapi.service;

import com.limaisaias.unimedapi.model.Usuario;

import java.util.List;
import java.util.Optional;

public interface UsuarioService {

    Usuario salvarUsuario(Usuario usuario);

    Optional<Usuario> buscarUsuarioPorId(Long id);

    List<Usuario> buscarTodosUsuarios();

    void deletarUsuarioPorId(Long id);

}
