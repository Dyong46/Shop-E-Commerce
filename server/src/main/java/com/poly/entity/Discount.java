package com.poly.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity @Table(name = "[discount]")
public class Discount {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private  String name;

    private String desc;

    private Integer discount_percent;

    private Boolean active;

    @Temporal(TemporalType.DATE)
    private Date created_at;

    @Temporal(TemporalType.DATE)
    private Date updated_at;

    @JsonIgnore
    @OneToMany(mappedBy = "discount_id")
    private List<Order> orders;
}
