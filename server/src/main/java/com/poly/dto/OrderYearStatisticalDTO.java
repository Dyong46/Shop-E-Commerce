package com.poly.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class OrderYearStatisticalDTO {
    private Integer month;
    private Long totalPrice;

    public OrderYearStatisticalDTO(Integer month, Long totalPrice) {
        this.month = month;
        this.totalPrice = totalPrice;
    }
}
