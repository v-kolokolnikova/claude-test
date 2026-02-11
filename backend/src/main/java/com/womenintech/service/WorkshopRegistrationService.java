package com.womenintech.service;

import com.womenintech.model.WorkshopRegistration;
import com.womenintech.repository.WorkshopRegistrationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkshopRegistrationService {

    private final WorkshopRegistrationRepository workshopRegistrationRepository;

    public WorkshopRegistrationService(WorkshopRegistrationRepository workshopRegistrationRepository) {
        this.workshopRegistrationRepository = workshopRegistrationRepository;
    }

    public List<WorkshopRegistration> getAll() {
        return workshopRegistrationRepository.findAll();
    }

    public WorkshopRegistration register(WorkshopRegistration registration) {
        return workshopRegistrationRepository.save(registration);
    }
}
