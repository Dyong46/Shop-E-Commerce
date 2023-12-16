package com.poly.service;

import com.poly.dto.StripeCheckoutDTO;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentLink;
import com.stripe.model.checkout.Session;

public interface StripeService {
    String checkout(StripeCheckoutDTO stripeCheckoutDTO) throws StripeException;
}
