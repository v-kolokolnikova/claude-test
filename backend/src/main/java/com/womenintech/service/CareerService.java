package com.womenintech.service;

import com.womenintech.model.Career;
import com.womenintech.repository.CareerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CareerService {

    private final CareerRepository careerRepository;

    public CareerService(CareerRepository careerRepository) {
        this.careerRepository = careerRepository;
    }

    public List<Career> getAll() {
        return careerRepository.findAll();
    }

    public Optional<Career> getById(Long id) {
        return careerRepository.findById(id);
    }
}
