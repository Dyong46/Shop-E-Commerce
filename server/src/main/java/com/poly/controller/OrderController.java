package com.poly.controller;

import com.poly.dto.OrderAccount;
import com.poly.entity.Order;
import com.poly.entity.OrderDetail;
import com.poly.service.OrderAccService;
import com.poly.Utils.ResponseBodyServer;
import com.poly.constant.StatusOrder;
import com.poly.dto.OrderDTO;
import com.poly.entity.Order;
import com.poly.entity.OrderDetail;
import com.poly.entity.OrderStatus;
import com.poly.repo.OrderRepository;
import com.poly.service.OrderDetailsService;
import com.poly.service.OrderService;
import com.poly.service.OrderStatusService;
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

    @GetMapping("/status")
    public List<Order> getAllOrderById(@RequestParam("account_id") Integer id,

            @RequestParam("status_id") String status) {
        return orderService.getAllOrderById(id, status);
    }

    @PostMapping("/pay")
    public ResponseEntity<Order> payment(@RequestParam("order_id") Integer id) {
        Order orderCheck = orderService.getOrderById(id);
        if (orderCheck == null) {
            return ResponseEntity.notFound().build();
        }
        Order order = orderService.setStatusPayment(id);
        return ResponseEntity.ok(order);
    }

    @PostMapping("/pay-product")
    public ResponseEntity<Order> paymentProduct(@RequestBody OrderDTO entity) throws MessagingException {
        try {
            Order createdOrder = orderService.createOrder(entity);
            return new ResponseEntity<>(createdOrder, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/complete")
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
            responseBodyServer = ResponseBodyServer.builder().statusCode(404).message("Not Found!" + orderCheck.getId())
                    .payload(null).build();
        }
        return ResponseEntity.status(200).body(responseBodyServer);
    }

    @PostMapping("/shippping")
    public ResponseEntity<Order> shippingOrder(@RequestParam("order_id") Integer id) {
        Order orderCheck = orderService.getOrderById(id);
        if (orderCheck == null) {
            return ResponseEntity.notFound().build();
        }
        Order order = orderService.setStatusShipping(id);
        return ResponseEntity.ok(order);
    }

    @PostMapping("/cancel")
    public ResponseEntity<Order> cancelStatusOrder(@RequestParam("order_id") Integer id) {
        Order orderCheck = orderService.getOrderById(id);
        if (orderCheck == null) {
            return ResponseEntity.notFound().build();
        }
        Order order = orderService.setStatusCancel(id);
        return ResponseEntity.ok(order);
    }



    @PutMapping("/cancel/{id}")
    public Order cancelOrder(@PathVariable("id") Integer id) {
        return orderService.cancelOrder(id);
    }

    @PostMapping("/post")
    public Order postorder(@RequestBody Order order){
        return orderService.postOrder(order);
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
