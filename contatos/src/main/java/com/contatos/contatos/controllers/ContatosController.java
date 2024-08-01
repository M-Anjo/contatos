package com.contatos.contatos.controllers;

import com.contatos.contatos.entity.Contato;
import com.contatos.contatos.repositories.ContatosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value ="contatos")
public class ContatosController {

    @Autowired
    private ContatosRepository repository;

    @GetMapping
    public List<Contato> findAll(){
        List<Contato> result = repository.findAll();
        return result;
    }

    @GetMapping(value ="/{id}")
    public Contato findById(@PathVariable long id){
        Contato result = repository.findById(id).get();
        return result;
    }

    @PostMapping()
    public Contato insert(@RequestBody Contato contato){
        Contato result = repository.save(contato);
        return result;
    }

    @DeleteMapping("/{id}")
    public void deleteEntity(@PathVariable Long id) {
        repository.deleteById(id);
    }
}





