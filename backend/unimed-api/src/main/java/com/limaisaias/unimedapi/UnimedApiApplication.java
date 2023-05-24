package com.limaisaias.unimedapi;

import com.limaisaias.unimedapi.model.Usuario;
import com.limaisaias.unimedapi.repository.UsuarioRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class UnimedApiApplication {
    @Autowired
    UsuarioRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(UnimedApiApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedHeaders("*")
                        .allowedMethods("*")
                        .allowedOrigins("*");
            }
        };
    }

    @PostConstruct
    public void salvaUsuario() {
        Usuario usuario = new Usuario();
        usuario.setLogin("admin");
        usuario.setNome("admin");
        usuario.setSenha("123456");
        repository.save(usuario);
    }
}
