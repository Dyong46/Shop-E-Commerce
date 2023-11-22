package com.poly.service.impl;
import com.poly.entity.OrderDetail;
import com.poly.repo.OrderDetailRepository;
import com.poly.service.OrderDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailsImpl implements OrderDetailsService {
    @Autowired
    OrderDetailRepository repo;

    @Override
    public List<OrderDetail> getAll(){
        return repo.findAll();
    }

    @Override
    public OrderDetail createOrderDetails(OrderDetail detail){
        return repo.save(detail);
    }
}
