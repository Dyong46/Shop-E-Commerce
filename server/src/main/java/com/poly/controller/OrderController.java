package com.poly.controller;

import com.poly.dto.*;
import com.poly.entity.Order;
import com.poly.entity.OrderDetail;
import com.poly.service.OrderAccService;
import com.poly.constant.StatusOrder;
import com.poly.entity.OrderStatus;
import com.poly.repo.OrderRepository;
import com.poly.service.OrderDetailsService;
import com.poly.service.OrderService;
import com.poly.service.OrderStatusService;
import com.poly.utils.ResponseBodyServer;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    OrderService orderService;

    @Autowired
    OrderStatusService orderStatusService;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderDetailsService orderDetailsService;

    @Autowired
    OrderAccService orderAccService;

    @GetMapping()
    public List<Order> getAll() {
        return orderService.getAllOrder();
    }

    @GetMapping("/status/{id}")
    public List<Order> getAllOrderByStatus(@PathVariable("id") Integer id) {
        return orderService.getAllOrderByStatus(id);
    }

    // Đang có vấn đề
    @GetMapping("/status")
    public List<Order> getAllOrderById(@RequestParam("account_id") Integer id,
            @RequestParam("status_id") String status) {
        return orderService.getAllOrderById(id, status);
    }

    @GetMapping("/statistical/totalprice")
    public ResponseEntity<List<OrderStatusStatisticalDTO>> getOrderStatus(){
        List<OrderStatusStatisticalDTO> status = orderService.getOrderStatusStatistical();
        return new ResponseEntity<>(status,HttpStatus.OK);
    }

    @GetMapping("/statistical/topproduct")
    public ResponseEntity<List<OrderTopProductStatisticalDTO>> getProductTop(){
        List<OrderTopProductStatisticalDTO> status = orderService.getTopProduct();
        return new ResponseEntity<>(status,HttpStatus.OK);
    }

    @PostMapping("/statistical/year")
    public ResponseEntity<List<OrderYearStatisticalDTO>> getOrderByYear(
                        @RequestParam("year") String year){
        List<OrderYearStatisticalDTO> status = orderService.getAllOrderByYear(year);
        return new ResponseEntity<>(status,HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> paymentProduct(@RequestBody OrderDTO entity) throws MessagingException{
        try {
            Order createdOrder = orderService.createOrder(entity);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdOrder);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/shipping")
    public ResponseEntity<?> shippingOrder(@RequestParam("order_id") Integer id)
                    throws ChangeSetPersister.NotFoundException{
        Order order = orderService.getOrderById(id);
        OrderStatus status = orderStatusService.findOrderbyId(StatusOrder.CHO_XAC_NHAN);
        ResponseBodyServer responseBodyServer;
        if(order != null){
            if(order.getStatus_id().equals(status)){
                OrderStatus orderStatus = orderStatusService.findOrderbyId(StatusOrder.DANG_GIAO);
                order.setStatus_id(orderStatus);
                orderRepository.save(order);
                responseBodyServer = ResponseBodyServer.builder().statusCode(200).message("Successfully!")
                        .payload(order).build();
            }else {
                responseBodyServer = ResponseBodyServer.builder().statusCode(404)
                        .message("Can't set status because status might is shipping").payload(null).build();
            }
        }else {
            responseBodyServer = ResponseBodyServer.builder().statusCode(404).message("Not Found!" + order.getId())
                    .payload(null).build();
        }
        return ResponseEntity.status(200).body(responseBodyServer);
    }

    @PutMapping("/complete")
    public ResponseEntity<?> completeOrder(@RequestParam("order_id") Integer id)
            throws ChangeSetPersister.NotFoundException {
        Order orderCheck = orderService.getOrderById(id);
        OrderStatus status = orderStatusService.findOrderbyId(StatusOrder.DANG_GIAO);
        ResponseBodyServer responseBodyServer;
        if (orderCheck != null) {
            if (orderCheck.getStatus_id().getId().equals(status.getId())) {
                OrderStatus orderStatus = orderStatusService.findOrderbyId(StatusOrder.DA_GIAO);
                orderCheck.setStatus_id(orderStatus);
                orderRepository.save(orderCheck);
                responseBodyServer = ResponseBodyServer.builder().statusCode(200).message("Successfully!")
                        .payload(orderCheck).build();
            } else {
                responseBodyServer = ResponseBodyServer.builder().statusCode(404)
                        .message("Can't set status because status might is shipping").payload(null).build();
            }
        } else {
            responseBodyServer = ResponseBodyServer.builder().statusCode(404).message("Not Found!" + id)
                    .payload(null).build();
        }
        return ResponseEntity.status(responseBodyServer.getStatusCode()).body(responseBodyServer);
    }

    @PutMapping("/cancel")
    public ResponseEntity<Order> cancelStatusOrder(@RequestParam("order_id") Integer id) {
        Order orderCheck = orderService.getOrderById(id);
        if (orderCheck == null) {
            return ResponseEntity.notFound().build();
        }
        Order order = orderService.setStatusCancel(id);
        return ResponseEntity.ok(order);
    }

    @PostMapping("/postdetails")
    public OrderDetail postDetails(@RequestBody OrderDetail orderDetail) {
        return orderDetailsService.createOrderDetails(orderDetail);
    }

    @GetMapping("/details")
    public List<OrderDetail> getAllDetails() {
        return orderDetailsService.getAll();
    }

    @GetMapping("/details/{idacc}/{status}")
    public List<OrderAccount> getOrderByAccAndStatus(@PathVariable("idacc") Integer idacc,
            @PathVariable("status") Integer status) {
        return orderAccService.getOrderByAccAndStatus(idacc, status);
    }

    @GetMapping("/details/{idacc}")
    public List<OrderAccount> getOrderByAcc(@PathVariable("idacc") Integer idacc) {
        return orderAccService.getOrderByAcc(idacc);
    }

}
