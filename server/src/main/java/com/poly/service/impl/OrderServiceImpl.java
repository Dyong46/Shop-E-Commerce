package com.poly.service.impl;

import com.poly.constant.StatusOrder;
import com.poly.dto.OrderDTO;
import com.poly.dto.OrderDetailDTO;
import com.poly.entity.*;
import com.poly.repo.DiscountRepository;
import com.poly.entity.Order;
import com.poly.entity.OrderDetail;
import com.poly.entity.OrderStatus;
import com.poly.repo.OrderRepository;
import com.poly.repo.ProductRepository;
import com.poly.service.*;
import jakarta.mail.MessagingException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    OrderStatusService orderStatusService;

    @Autowired
    ProductService productService;

    @Autowired
    EmailService emailService;

    @Autowired
    DiscountRepository discountRepository;

    @Autowired
    AccountService accountService;

    @Override
    public List<Order> getAllOrder(){
        return orderRepository.findAll();
    }

    @Override
    public Order setStatusPayment(Integer id) {
        Order order = getOrderById(id);
        OrderStatus orderStatus = orderStatusService.findOrderbyId(StatusOrder.CHO_XAC_NHAN);
        order.setStatus_id(orderStatus);
        return orderRepository.save(order);
    }

    @Override
    public Order setStatusComplete(Integer id) {
        Order order = getOrderById(id);
        System.out.println(order.getStatus_id().getId());
        OrderStatus status = orderStatusService.findOrderbyId(StatusOrder.DANG_GIAO);
        System.out.println(status.getId());
        if(order.getStatus_id().getId().equals(status.getId())){
            OrderStatus orderStatus = orderStatusService.findOrderbyId(StatusOrder.DA_GIAO);
            order.setStatus_id(orderStatus);
            System.out.println("success");
        }else {
            System.out.println("Can not set status");
        }
        return orderRepository.save(order);
    }

    @Override
    public Order setStatusShipping(Integer id) {
        Order order = getOrderById(id);
        OrderStatus orderStatus = orderStatusService.findOrderbyId(StatusOrder.DANG_GIAO);
        order.setStatus_id(orderStatus);
        return orderRepository.save(order);
    }

    @Override
    public Order setStatusCancel(Integer id) {
        Order order = getOrderById(id);
        OrderStatus orderStatus = orderStatusService.findOrderbyId(StatusOrder.DA_HUY);
        order.setStatus_id(orderStatus);
        return orderRepository.save(order);
    }

    @Override
    public Order getOrderById(Integer id) {
        return orderRepository.getOrderById(id);
    }

    @Override
    public List<Order> getAllOrderByStatus(Integer id){
        return orderRepository.getAllOrderByStatus(id);
    }

    @Override
    public Order create(OrderDTO entity) throws MessagingException {
//        Order order = new Order();
//        String email = order.getAccount_id().getEmail();
//        String username = order.getAccount_id().getUsername();
//        String subject = "Thư cảm ơn ";
//        String context = "Chào " + username +
//                " Xin chân thành cảm ơn bạn đã mua hàng tại cửa hàng của chúng tôi! Rất vui được phục vụ bạn và chúng tôi hy vọng rằng bạn đã có một trải nghiệm mua sắm thú vị và hài lòng với sản phẩm mà bạn đã chọn.\n"
//                +
//                "\n" +
//                "Chúng tôi đánh giá cao sự tin tưởng của bạn và cam kết cung cấp dịch vụ tốt nhất cho khách hàng. Nếu bạn có bất kỳ câu hỏi, đề xuất hoặc phản hồi nào, hãy xin vui lòng liên hệ với chúng tôi. Đội ngũ chăm sóc khách hàng của chúng tôi sẽ sẵn lòng giúp đỡ bạn.\n"
//                +
//                "\n" +
//                "Một lần nữa, xin chân thành cảm ơn bạn đã lựa chọn mua hàng tại cửa hàng của chúng tôi. Rất mong được phục vụ bạn trong tương lai.\n"
//                +
//                "\n" +
//                "Trân trọng";
//        emailService.sendEmail(subject,email,context);
//        OrderStatus orderStatus = orderStatusService.findOrderbyId(StatusOrder.CHO_XAC_NHAN);
//        order.setStatus_id(orderStatus);
//        order.setCreated_at(new Date());
//        Product existingProduct = productService.getProductById(entity.getDetail().getProduct_id().getId());
//        Integer quantity = entity.getDetail().getQuantity();
//        if(existingProduct != null){
//            Integer newQuantity = existingProduct.getQuantity() - quantity;
//            existingProduct.setQuantity(newQuantity);
//            productRepository.save(existingProduct);
//        }
        return null;
    }

    @Override
    public Order cancelOrder(Integer id){
        Order order = orderRepository.findByOrderById(id).orElse(null);
        OrderStatus orderStatus = orderStatusService.findOrderbyId(4);
        order.setStatus_id(orderStatus);
        return orderRepository.save(order);
    }

    @Override
    public List<Order> getAllOrderById(Integer id, String status){
        return orderRepository.getAllOrderById(id, status);
    }

    @Override
    @Transactional
    public Order createOrder(OrderDTO orderRequestDTO) {
        Long totalPrice = (long) 0;
        Order order = new Order();
        order.setCreated_at(new Date());
//        order.setTotal_amount(orderRequestDTO.getTotalAmount());
        order.setFullname(orderRequestDTO.getFullname());
        order.setPhone(orderRequestDTO.getPhone());
        order.setCity(orderRequestDTO.getCity());
        order.setDistrict(orderRequestDTO.getDistrict());
        order.setWards(orderRequestDTO.getWards());
        order.setSpecific_address(orderRequestDTO.getSpecificAddress());
        order.setAccount_id(accountService.getAccountById(orderRequestDTO.getAccountId()));
        order.setStatus_id(orderStatusService.findOrderbyId(StatusOrder.CHO_XAC_NHAN));

        // Set order details
        List<OrderDetail> orderDetails = new ArrayList<>();
        for (OrderDetailDTO detailDTO : orderRequestDTO.getOrderDetails()) {
            OrderDetail orderDetail = new OrderDetail();
            orderDetail.setQuantity(detailDTO.getQuantity());
//            orderDetail.setAmount(detailDTO.getAmount());
            orderDetail.setOrder_id(order);

            // Fetch product by ID and set it
            Product product = new Product();
            try {
                product = productService.getProductById(detailDTO.getProductId());
            }catch (Exception ex){
                ex.printStackTrace();
            }
            Integer quantity = detailDTO.getQuantity();
            Integer price = product.getPrice();
            Long total = Long.valueOf(quantity * price);
            // handel price
            orderDetail.setAmount(total);
            totalPrice = total + totalPrice;
            // handel quantity
            Integer newQuantity = product.getQuantity()-quantity;
//            orderDetail.setQuantity(quantity);
            product.setQuantity(newQuantity);
            productRepository.save(product);
            orderDetail.setProduct_id(product);
            orderDetails.add(orderDetail);
        }
        order.setOrderDetails(orderDetails);
        order.setTotal_amount(totalPrice);
        System.out.println(orderRequestDTO.getDiscountId());
        // Set discount
        if (orderRequestDTO.getDiscountId() != null) {
            Discount discount = discountRepository.findById(orderRequestDTO.getDiscountId()).orElse(null);
            order.setDiscount_id(discount);
            order.setTotal_amount(totalPrice*(100-discount.getDiscount_percent())/100);
        }
            Order resp = orderRepository.save(order);
            return resp;
    }

    @Override
    public Order postOrder(Order order){
        return orderRepository.save(order);
    }
}
