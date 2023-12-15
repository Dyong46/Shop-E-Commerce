package com.poly.dto;

import com.poly.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderTopProductStatisticalDTO {
    private Integer id;
    private String nameProduct;
    private Integer price;
    private String img;
    private Integer quantity;
    private Category category;
    private Long totalBuy;
}
