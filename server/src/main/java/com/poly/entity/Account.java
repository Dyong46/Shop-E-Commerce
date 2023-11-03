package com.poly.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity @Table(name = "[accounts]")
public class Account implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String email;

    private String username;

    private String password;

    private String fullname;

    private String phone;

    private Boolean gender;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private Date date_of_birth;

    private String img;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private Date created_at;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private Date updated_at;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private Date deleted_at;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "role_id", referencedColumnName = "id")
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    private Role role_id;

    @JsonIgnore
    @OneToMany(mappedBy = "account_id")
    private List<Address> addresses;

    @JsonIgnore
    @OneToMany(mappedBy = "account_id")
    private List<Order> orders;

    @JsonIgnore
    @OneToMany(mappedBy = "account_id")
    private List<Review> reviews;

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", fullname='" + fullname + '\'' +
                ", phone='" + phone + '\'' +
                ", gender=" + gender +
                ", date_of_birth=" + date_of_birth +
                ", img='" + img + '\'' +
                ", created_at=" + created_at +
                ", updated_at=" + updated_at +
                ", deleted_at=" + deleted_at +
                ", role_id=" + role_id +
                ", addresses=" + addresses +
                ", orders=" + orders +
                ", reviews=" + reviews +
                '}';
    }
}
