package com.poly.dto;

import lombok.Data;

@Data
public class StripeCheckoutDTO {

    private String successUrl;
    private String cancelUrl;
}
