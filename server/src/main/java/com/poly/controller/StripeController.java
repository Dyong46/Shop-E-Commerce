package com.poly.controller;

import com.poly.dto.StripeCheckoutDTO;
import com.poly.service.StripeService;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentLink;
import com.stripe.model.checkout.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/stripe")
public class StripeController {

    @Autowired
    StripeService stripeService;

    @PostMapping("/checkout")
    public String checkout(@RequestBody StripeCheckoutDTO stripeCheckoutDTO) throws StripeException {
        return stripeService.checkout(stripeCheckoutDTO);
    }
}
