package com.poly.service;

import com.poly.dto.OrderDTO;
import com.poly.entity.Order;
import jakarta.mail.MessagingException;

import java.util.List;

public interface OrderService {
    List<Order> getAllOrder();
    Order setStatusCancel(Integer id);
    Order getOrderById(Integer id);
    List<Order> getAllOrderByStatus(Integer id);
    Order cancelOrder(Integer id);
    List<Order> getAllOrderById(Integer id, String status);
    Order createOrder(OrderDTO orderRequestDTO) throws MessagingException;
}
