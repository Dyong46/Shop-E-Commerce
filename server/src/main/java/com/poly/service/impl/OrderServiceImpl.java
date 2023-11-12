package com.poly.service.impl;

import com.poly.constant.StatusOrder;
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
    public Order setStatusPayment(Integer id) {
        Order order = getOrderById(id);
        OrderStatus orderStatus = orderStatusService.findOrderbyId(StatusOrder.CHO_XAC_NHAN);
        order.setStatus_id(orderStatus);
        return orderRepository.save(order);
    }

    @Override
    public Order setStatusComplete(Integer id) {
        Order order = getOrderById(id);
        System.out.println(order.getStatus_id().getId());
        OrderStatus status = orderStatusService.findOrderbyId(StatusOrder.DANG_GIAO);
        System.out.println(status.getId());
        if(order.getStatus_id().getId().equals(status.getId())){
            OrderStatus orderStatus = orderStatusService.findOrderbyId(StatusOrder.DA_GIAO);
            order.setStatus_id(orderStatus);
            System.out.println("success");
        }else {
            System.out.println("Can not set status");
        }
        return orderRepository.save(order);
    }

    @Override
    public Order setStatusShipping(Integer id) {
        Order order = getOrderById(id);
        OrderStatus orderStatus = orderStatusService.findOrderbyId(StatusOrder.DANG_GIAO);
        order.setStatus_id(orderStatus);
        return orderRepository.save(order);
    }

    @Override
    public Order setStatusCancel(Integer id) {
        Order order = getOrderById(id);
        OrderStatus orderStatus = orderStatusService.findOrderbyId(StatusOrder.DA_HUY);
        order.setStatus_id(orderStatus);
        return orderRepository.save(order);
    }

    @Override
    public Order getOrderById(Integer id) {
        return orderRepository.getOrderById(id);
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
