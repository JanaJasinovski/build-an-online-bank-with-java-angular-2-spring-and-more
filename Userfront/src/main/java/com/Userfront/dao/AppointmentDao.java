package com.Userfront.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.Userfront.domain.Appointment;

public interface AppointmentDao extends JpaRepository<Appointment, Long> {

    List<Appointment> findAll();
    Optional<Appointment> findById(Long id);

}
