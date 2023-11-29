package com.poly.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;
import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class OrderAccount implements Serializable {
    @Id
    private Integer id_product;
    private String name_product;
    private String description;
    private Integer price;
    private String img;
    private Integer quantity;
    private Date create_at;
    private Date update_at;
    private Date delete_at;
    private Integer category_id;
    private Integer id_account;
    private String name_account;
}
