package com.womenintech.service;

import com.womenintech.model.HistoricalFact;
import com.womenintech.repository.HistoricalFactRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HistoricalFactService {

    private final HistoricalFactRepository historicalFactRepository;

    public HistoricalFactService(HistoricalFactRepository historicalFactRepository) {
        this.historicalFactRepository = historicalFactRepository;
    }

    public List<HistoricalFact> getAll() {
        return historicalFactRepository.findAllByOrderByYearAsc();
    }

    public Optional<HistoricalFact> getById(Long id) {
        return historicalFactRepository.findById(id);
    }
}
