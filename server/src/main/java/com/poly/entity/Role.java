package com.poly.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity @Table(name = "[roles]")
public class Role {

    @Id
    private String id;

    private String name;

    @OneToMany(mappedBy = "role_id")
    @JsonIgnore
    private List<Account> accounts;
}
