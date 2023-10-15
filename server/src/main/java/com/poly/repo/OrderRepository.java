package com.poly.repo;

import com.poly.entity.Order;
import com.poly.entity.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    @Query("select o from Order o where o.status_id.id = :id")
    List<Order> getAllOrderByStatus(Integer id);
    Order save(Order order);

    @Query("select o from Order o where o.id = :id")
    Optional<Order> findByOrderById(Integer id);

    @Query("select o from Order o where o.account_id.id = :id and o.status_id.id = :status")
    List<Order> getAllOrderById(Integer id, String status);
}
