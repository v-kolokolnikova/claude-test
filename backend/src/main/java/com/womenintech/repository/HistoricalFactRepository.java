package com.womenintech.repository;

import com.womenintech.model.HistoricalFact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HistoricalFactRepository extends JpaRepository<HistoricalFact, Long> {
    List<HistoricalFact> findAllByOrderByYearAsc();
}
