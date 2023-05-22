package com.limaisaias.unimedapi;

import com.limaisaias.unimedapi.model.Usuario;
import com.limaisaias.unimedapi.repository.UsuarioRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UnimedApiApplication {
    @Autowired
    UsuarioRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(UnimedApiApplication.class, args);
    }

    @PostConstruct
    public void salvaUsuario(){
        Usuario usuario = new Usuario();
        usuario.setLogin("admin");
        usuario.setNome("admin");
        usuario.setSenha("123456");
        repository.save(usuario);
    }
}
