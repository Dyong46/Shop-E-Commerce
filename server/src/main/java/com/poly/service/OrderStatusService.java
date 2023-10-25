package com.poly.service;

import com.poly.entity.OrderStatus;
import com.poly.repo.OrderStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderStatusService {
    @Autowired
    OrderStatusRepository orderStatusRepository;

    public OrderStatus findOrderbyId(Integer id){
        return orderStatusRepository.findByOrderById(id).orElse(null);
    }
}
