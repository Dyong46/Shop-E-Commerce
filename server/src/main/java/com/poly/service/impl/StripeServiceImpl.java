package com.poly.service.impl;

import com.poly.dto.OrderDetailDTO;
import com.poly.dto.StripeCheckoutDTO;
import com.poly.entity.Discount;
import com.poly.entity.Order;
import com.poly.entity.OrderDetail;
import com.poly.entity.Product;
import com.poly.repo.DiscountRepository;
import com.poly.repo.ProductRepository;
import com.poly.service.OrderService;
import com.poly.service.ProductService;
import com.poly.service.StripeService;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import java.util.HashMap;
import java.util.Map;

@Service
public class StripeServiceImpl implements StripeService {

    static {
        Stripe.apiKey = "sk_test_51OMt11D4P9vfQl1xtzJB7NPQudTssjhkACdjDLluq5X6G7gA0lZMiNOEV15VBq59jxRkklfaSGMAcdvcqERK7dRW00NWfp6kKb";
    }

    @Autowired
    ProductRepository productRepository;

    @Autowired
    DiscountRepository discountRepository;

    @Autowired
    OrderService orderService;

    @Override
    public String checkout(StripeCheckoutDTO stripeCheckoutDTO) throws StripeException {
        try {
            orderService.createOrder(stripeCheckoutDTO);
        } catch (Exception e) {
            e.printStackTrace();
        }

        SessionCreateParams.Builder builder = new SessionCreateParams.Builder();
        builder.addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD);
        builder.setMode(SessionCreateParams.Mode.PAYMENT);
        builder.setSuccessUrl(stripeCheckoutDTO.getSuccessUrl());
        builder.setCancelUrl(stripeCheckoutDTO.getErrorUrl());

        for(OrderDetailDTO orderDetail: stripeCheckoutDTO.getOrderDetails()) {
            Product product = productRepository.findById(orderDetail.getProductId()).orElse(null);
            if(product != null) {
                builder.addLineItem(
                    SessionCreateParams.LineItem.builder()
                        .setQuantity((long) orderDetail.getQuantity())
                        .setPriceData(
                            SessionCreateParams.LineItem.PriceData.builder()
                                .setCurrency("vnd")
                                .setUnitAmount(Long.valueOf(product.getPrice()))
                                .setProductData(
                                    SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                        .setName(product.getName_product())
                                        .build())
                                .build())
                        .build())
                .build();
            }
        }
        SessionCreateParams params = builder.build();

        try {
            Session session = Session.create(params);
            return session.getUrl();
        } catch (Exception e) {
            // Handle exceptions
            e.printStackTrace();
            return null;
        }
    }
}
