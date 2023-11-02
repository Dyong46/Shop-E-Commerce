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
@RequestMapping("/api/order-management")
public class OrderController {

    @Autowired
    OrderService orderService;

    @Autowired
    SendMailController sendMailController;
    @GetMapping("order")
    public List<Order> getAll() {
        return orderService.getAllOrder();
    }

    @GetMapping("/status-id/{id}")
    public List<Order> getAllOrderByStatus(@PathVariable("id") Integer id){
        return orderService.getAllOrderByStatus(id);
    }

    @GetMapping("/orderby-id/status-id")
    public List<Order> getAllOrderById(@RequestParam("id")Integer id,
                                            @RequestParam("status")String status){
        return orderService.getAllOrderById(id, status);
    }

    @PostMapping("/order")
    public Order postSave(@RequestBody Order entity){
        Order order = orderService.create(entity);
        String email = order.getAccount_id().getEmail();
        String username = order.getAccount_id().getUsername();
        String subject = "Thư cảm ơn ";
        String context = "Chào "+username+
                " Xin chân thành cảm ơn bạn đã mua hàng tại cửa hàng của chúng tôi! Rất vui được phục vụ bạn và chúng tôi hy vọng rằng bạn đã có một trải nghiệm mua sắm thú vị và hài lòng với sản phẩm mà bạn đã chọn.\n" +
                "\n" +
                "Chúng tôi đánh giá cao sự tin tưởng của bạn và cam kết cung cấp dịch vụ tốt nhất cho khách hàng. Nếu bạn có bất kỳ câu hỏi, đề xuất hoặc phản hồi nào, hãy xin vui lòng liên hệ với chúng tôi. Đội ngũ chăm sóc khách hàng của chúng tôi sẽ sẵn lòng giúp đỡ bạn.\n" +
                "\n" +
                "Một lần nữa, xin chân thành cảm ơn bạn đã lựa chọn mua hàng tại cửa hàng của chúng tôi. Rất mong được phục vụ bạn trong tương lai.\n" +
                "\n" +
                "Trân trọng";
        sendMailController.sendMail(email,subject,context);
        return order;
    }

    @PutMapping("/{id}")
    public Order deleteOrder(@PathVariable("id") Integer id){
        return orderService.deleteOrder(id);
    }


}
