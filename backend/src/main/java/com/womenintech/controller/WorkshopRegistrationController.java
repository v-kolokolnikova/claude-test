package com.womenintech.controller;

import com.womenintech.model.WorkshopRegistration;
import com.womenintech.service.WorkshopRegistrationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/registrations")
public class WorkshopRegistrationController {

    private final WorkshopRegistrationService workshopRegistrationService;

    public WorkshopRegistrationController(WorkshopRegistrationService workshopRegistrationService) {
        this.workshopRegistrationService = workshopRegistrationService;
    }

    @GetMapping
    public List<WorkshopRegistration> getAll() {
        return workshopRegistrationService.getAll();
    }

    @PostMapping
    public ResponseEntity<WorkshopRegistration> register(@Valid @RequestBody WorkshopRegistration registration) {
        WorkshopRegistration saved = workshopRegistrationService.register(registration);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
}
