package com.poly.service.impl;

import com.poly.entity.Order;
import com.poly.entity.OrderStatus;
import com.poly.repo.OrderRepository;
import com.poly.service.OrderService;
import com.poly.service.OrderStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderStatusService orderStatusService;

    @Override
    public List<Order> getAllOrder(){
        return orderRepository.findAll();
    }

    @Override
    public List<Order> getAllOrderByStatus(Integer id){
        return orderRepository.getAllOrderByStatus(id);
    }

    @Override
    public Order create(Order entity){
        Date date = new Date();
        entity.setCreated_at(date);
        return orderRepository.save(entity);
    }

    @Override
    public Order cancelOrder(Integer id){
        Order order = orderRepository.findByOrderById(id).orElse(null);
        OrderStatus orderStatus = orderStatusService.findOrderbyId(3);
        order.setStatus_id(orderStatus);
        return orderRepository.save(order);
    }

    @Override
    public List<Order> getAllOrderById(Integer id, String status){
        return orderRepository.getAllOrderById(id, status);
    }
}
