package com.poly.service;

import com.poly.entity.OrderStatus;

public interface OrderStatusService {
    public abstract OrderStatus findOrderbyId(Integer id);
}
