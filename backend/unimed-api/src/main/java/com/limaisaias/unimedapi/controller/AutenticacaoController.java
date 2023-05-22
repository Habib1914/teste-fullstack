package com.limaisaias.unimedapi.controller;

import com.limaisaias.unimedapi.model.DadosAutenticacao;
import com.limaisaias.unimedapi.model.DadosTokenJWT;
import com.limaisaias.unimedapi.model.Usuario;
import com.limaisaias.unimedapi.service.AutenticacaoService;
import com.limaisaias.unimedapi.service.TokenService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class AutenticacaoController {

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private AutenticacaoService autenticacaoService;

    @PostMapping
    public ResponseEntity<DadosTokenJWT> authenticate(@RequestBody DadosAutenticacao authRequest) {
        try {
            Authentication authentication = manager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.login(), authRequest.senha()));

            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            String token = tokenService.gerarToken((Usuario) userDetails);

            DadosTokenJWT tokenResponse = new DadosTokenJWT(token);

            return ResponseEntity.ok(tokenResponse);
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
