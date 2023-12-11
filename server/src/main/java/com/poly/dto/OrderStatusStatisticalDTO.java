package com.poly.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class OrderStatusStatisticalDTO {
    private Integer id;
    private String status;
    private Long count;

    public OrderStatusStatisticalDTO(Integer id, String status, Long count) {
        this.id = id;
        this.status = status;
        this.count = count;
    }
}
