package com.poly.service;

import com.stripe.exception.StripeException;

public interface StripeService {
    void checkout() throws StripeException;
}
