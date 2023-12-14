package com.poly.controller;

import com.poly.service.StripeService;
import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/stripe")
public class StripeController {

    @Autowired
    StripeService stripeService;

    @PostMapping("/checkout")
    public void checkout() throws StripeException {
        stripeService.checkout();
    }
}
