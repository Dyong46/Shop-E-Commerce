package com.poly.service;

import com.poly.entity.Order;
import com.poly.entity.OrderDetail;

import java.util.List;

public interface OrderDetailsService {

    List<OrderDetail> getAll();

    OrderDetail createOrderDetails(OrderDetail enity);
}
