package com.womenintech.repository;

import com.womenintech.model.WorkshopRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkshopRegistrationRepository extends JpaRepository<WorkshopRegistration, Long> {
}
