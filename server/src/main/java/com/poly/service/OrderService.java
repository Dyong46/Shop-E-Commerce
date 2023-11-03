package com.poly.service;

import com.poly.entity.Order;
import java.util.List;

public interface OrderService {
    List<Order> getAllOrder();

    List<Order> getAllOrderByStatus(Integer id);

    Order create(Order entity);

    Order cancelOrder(Integer id);

    List<Order> getAllOrderById(Integer id, String status);
}
