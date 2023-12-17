package com.poly.dto;

import com.poly.entity.Product;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class StripeCheckoutDTO extends OrderDTO {
    private String successUrl;
    private String errorUrl;
}
