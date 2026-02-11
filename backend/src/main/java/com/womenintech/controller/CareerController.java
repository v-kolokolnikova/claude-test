package com.womenintech.controller;

import com.womenintech.model.Career;
import com.womenintech.service.CareerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/careers")
public class CareerController {

    private final CareerService careerService;

    public CareerController(CareerService careerService) {
        this.careerService = careerService;
    }

    @GetMapping
    public List<Career> getAll() {
        return careerService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Career> getById(@PathVariable Long id) {
        return careerService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
