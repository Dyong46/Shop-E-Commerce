package com.poly.controller;

import com.poly.entity.Account;
import com.poly.entity.Order;
import com.poly.entity.OrderStatus;
import com.poly.entity.Product;
import com.poly.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class OrderController {

    @Autowired
    OrderService orderService;

    @GetMapping("/api/order/getall")
    public List<Order> getAll() {
        return orderService.getAllOrder();
    }

    @GetMapping("/api/order/getallbystatus")
    public List<Order> getAllOrderByStatus(@RequestParam("id") Integer id){
        return orderService.getAllOrderByStatus(id);
    }

    @GetMapping("/api/order/getallorderbyid")
    public List<Order> getAllOrderById(@RequestParam("id")Integer id,
                                            @RequestParam("status")String status){
        return orderService.getAllOrderById(id, status);
    }

    @PostMapping("/api/order/save")
    public Order postSave(@RequestBody Order entity){
        return orderService.create(entity);
    }

    @PutMapping("/api/order/delete")
    public Order deleteOrder(@RequestParam("id") Integer id){
        return orderService.deleteOrder(id);
    }


}
