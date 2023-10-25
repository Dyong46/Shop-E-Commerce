package com.poly.service;

import com.poly.entity.Order;
import com.poly.entity.OrderStatus;
import com.poly.repo.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderStatusService orderStatusService;

    public List<Order> getAllOrder(){
        return orderRepository.findAll();
    }

    public List<Order> getAllOrderByStatus(Integer id){
        return orderRepository.getAllOrderByStatus(id);
    }

    public Order create(Order entity){
        Date date = new Date();
        entity.setCreated_at(date);
        return orderRepository.save(entity);
    }

    public Order deleteOrder(Integer id){
        Order order = orderRepository.findByOrderById(id).orElse(null);
        OrderStatus orderStatus = orderStatusService.findOrderbyId(3);
        order.setStatus_id(orderStatus);
        return orderRepository.save(order);
    }

    public List<Order> getAllOrderById(Integer id, String status){
        return orderRepository.getAllOrderById(id, status);
    }

}
