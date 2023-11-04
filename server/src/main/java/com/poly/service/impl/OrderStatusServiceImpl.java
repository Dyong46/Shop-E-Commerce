package com.poly.service.impl;

import com.poly.entity.OrderStatus;
import com.poly.repo.OrderStatusRepository;
import com.poly.service.OrderStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderStatusServiceImpl implements OrderStatusService {
    @Autowired
    OrderStatusRepository orderStatusRepository;

    @Override
    public OrderStatus findOrderbyId(Integer id){
        return orderStatusRepository.findByOrderById(id).orElse(null);
    }
}
