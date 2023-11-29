package com.poly.repo;

import com.poly.dto.OrderAccount;
import com.poly.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

@Repository
public interface OrderAccountRepository extends JpaRepository<OrderAccount,Integer> {
    @Query("SELECT NEW com.poly.dto.OrderAccount(pr.id,pr.name_product,pr.description,pr.price,pr.img,od.quantity,pr.created_at,pr.updated_at,pr.deleted_at,pr.category_id.id,a.id,a.username,s.id,s.status,o.id) " +
            "FROM Order o " +
            "LEFT JOIN Account a ON a.id = o.account_id.id " +
            "LEFT JOIN OrderDetail od ON od.order_id.id = o.id " +
            "LEFT JOIN Product pr ON pr.id = od.product_id.id " +
            "LEFT JOIN OrderStatus s ON s.id = o.status_id.id " +
            "LEFT JOIN Category ca ON ca.id = pr.category_id.id " +
            "WHERE a.id= :idacc")
    List<OrderAccount> getOrderByAcc(@Param("idacc") Integer idacc);

    @Query("SELECT NEW com.poly.dto.OrderAccount(pr.id,pr.name_product,pr.description,pr.price,pr.img,od.quantity,pr.created_at,pr.updated_at,pr.deleted_at,pr.category_id.id,a.id,a.username,s.id,s.status,o.id) " +
            "FROM Order o " +
            "LEFT JOIN Account a ON a.id = o.account_id.id " +
            "LEFT JOIN OrderDetail od ON od.order_id.id = o.id " +
            "LEFT JOIN Product pr ON pr.id = od.product_id.id " +
            "LEFT JOIN OrderStatus s ON s.id = o.status_id.id " +
            "LEFT JOIN Category ca ON ca.id = pr.category_id.id " +
            "WHERE a.id= :idacc AND s.id= :status")
    List<OrderAccount> getOrderByAccAndStatus(@Param("idacc") Integer idacc, @Param("status") Integer status);



}
