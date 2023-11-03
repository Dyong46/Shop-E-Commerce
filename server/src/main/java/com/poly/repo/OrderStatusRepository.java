package com.poly.repo;

import com.poly.entity.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrderStatusRepository extends JpaRepository<OrderStatus, Integer> {

    @Query("select o from OrderStatus o where o.id = :id")
    Optional<OrderStatus> findByOrderById(Integer id);
}
