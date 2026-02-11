package com.womenintech.controller;

import com.womenintech.model.HistoricalFact;
import com.womenintech.service.HistoricalFactService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/historical-facts")
public class HistoricalFactController {

    private final HistoricalFactService historicalFactService;

    public HistoricalFactController(HistoricalFactService historicalFactService) {
        this.historicalFactService = historicalFactService;
    }

    @GetMapping
    public List<HistoricalFact> getAll() {
        return historicalFactService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<HistoricalFact> getById(@PathVariable Long id) {
        return historicalFactService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
