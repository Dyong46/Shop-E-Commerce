package com.poly.service;

import com.poly.entity.Order;
import java.util.List;

public interface OrderService {
    List<Order> getAllOrder();
    Order setStatusPayment(Integer id);
    Order setStatusComplete(Integer id);
    Order setStatusShipping(Integer id);
    Order setStatusCancel(Integer id);
    Order getOrderById(Integer id);
    List<Order> getAllOrderByStatus(Integer id);

    Order create(Order entity);

    Order cancelOrder(Integer id);

    List<Order> getAllOrderById(Integer id, String status);
}
