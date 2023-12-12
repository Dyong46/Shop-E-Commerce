package com.poly.repo;

import com.poly.dto.OrderStatusStatisticalDTO;
import com.poly.dto.OrderYearStatisticalDTO;
import com.poly.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    @Query("select o from Order o where o.status_id.id = :id")
    List<Order> getAllOrderByStatus(Integer id);

    @Query("select o from Order o where o.id = :id")
    Order getOrderById(Integer id);

    @Query("select o from Order o where o.id = :id")
    Optional<Order> findByOrderById(Integer id);

    @Query("select o from Order o where o.account_id.id = :id")
    List<Order> getOrdersByAccount(Integer id);

    @Query("select o from Order o where o.account_id.id = :id and o.status_id.id = :status")
    List<Order> getAllOrderById(Integer id, String status);

    @Query("SELECT new com.poly.dto.OrderStatusStatisticalDTO(b.id, b.status, COUNT(a.id)) " +
       "FROM Order a RIGHT JOIN OrderStatus b ON a.status_id.id = b.id " +
       "GROUP BY b.id, b.status")
    List<OrderStatusStatisticalDTO> getAllProductByStatus();

    @Query("SELECT new com.poly.dto.OrderYearStatisticalDTO(MONTH(a.created_at), SUM(a.total_amount)) " +
            "FROM Order a WHERE YEAR(a.created_at) = :year GROUP BY MONTH(a.created_at)")
    List<OrderYearStatisticalDTO> getAllOrderByYear(@Param("year") String year);
}
