package com.poly.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity @Table(name = "[products]")
public class Product implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name_product;

    private String description;

    private Integer price;

    private Integer quantity;

    @Temporal(TemporalType.DATE)
    private Date created_at;

    @Temporal(TemporalType.DATE)
    private Date updated_at;

    @Temporal(TemporalType.DATE)
    private Date deleted_at;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    private Category category_id;

    @JsonIgnore
    @OneToMany(mappedBy = "product_id")
    private List<Gallery> galleries;

    @JsonIgnore
    @OneToMany(mappedBy = "product_id")
    private List<Review> reviews;

    public Product(Integer id, String name_product) {
        this.id = id;
        this.name_product = name_product;
    }
}
