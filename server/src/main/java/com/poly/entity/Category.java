package com.poly.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;
import java.util.List;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity @Table(name = "[categories]")
public class Category {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String img;

    private String desc;

    @Temporal(TemporalType.DATE)
    private Date created_at;

    @Temporal(TemporalType.DATE)
    private  Date updated_at;

    @Temporal(TemporalType.DATE)
    private Date deleted_at;

    @JsonIgnore
    @OneToMany(mappedBy = "category_id")
    private List<Product> products;
}
