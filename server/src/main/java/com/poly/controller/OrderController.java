package com.poly.controller;

import com.poly.dto.OrderAccount;
import com.poly.entity.Order;
import com.poly.entity.OrderDetail;
import com.poly.service.OrderAccService;
import com.poly.service.OrderDetailsService;
import com.poly.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    OrderService orderService;

    @Autowired
    SendMailController sendMailController;

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

    @PostMapping("/post")
    public Order postSave(@RequestBody Order entity) {
        Order order = orderService.create(entity);
        String email = order.getAccount_id().getEmail();
        String username = order.getAccount_id().getUsername();
        String subject = "Thư cảm ơn ";
        String context = "Chào " + username +
                " Xin chân thành cảm ơn bạn đã mua hàng tại cửa hàng của chúng tôi! Rất vui được phục vụ bạn và chúng tôi hy vọng rằng bạn đã có một trải nghiệm mua sắm thú vị và hài lòng với sản phẩm mà bạn đã chọn.\n"
                +
                "\n" +
                "Chúng tôi đánh giá cao sự tin tưởng của bạn và cam kết cung cấp dịch vụ tốt nhất cho khách hàng. Nếu bạn có bất kỳ câu hỏi, đề xuất hoặc phản hồi nào, hãy xin vui lòng liên hệ với chúng tôi. Đội ngũ chăm sóc khách hàng của chúng tôi sẽ sẵn lòng giúp đỡ bạn.\n"
                +
                "\n" +
                "Một lần nữa, xin chân thành cảm ơn bạn đã lựa chọn mua hàng tại cửa hàng của chúng tôi. Rất mong được phục vụ bạn trong tương lai.\n"
                +
                "\n" +
                "Trân trọng";
        sendMailController.sendMail(email, subject, context);
        return order;
    }

    @PutMapping("/cancel/{id}")
    public Order cancelOrder(@PathVariable("id") Integer id) {
        return orderService.cancelOrder(id);
    }

    @PostMapping("/postdetails")
    public OrderDetail postDetails(@RequestBody OrderDetail orderDetail){

        return orderDetailsService.createOrderDetails(orderDetail);
    }

    @GetMapping("/details")
    public List<OrderDetail> getAllDetails(){
        return orderDetailsService.getAll();
    }

    @GetMapping("/details/{idacc}/{status}")
    public List<OrderAccount> getOrderByAccAndStatus(@PathVariable("idacc") Integer idacc,@PathVariable("status") Integer status){
        return orderAccService.getOrderByAccAndStatus(idacc,status);
    }
    @GetMapping("/details/{idacc}")
    public List<OrderAccount> getOrderByAcc(@PathVariable("idacc") Integer idacc){
        return orderAccService.getOrderByAcc(idacc);
    }


}
