package com.poly.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Data @AllArgsConstructor @NoArgsConstructor
@Entity @Table(name = "[accounts]")
public class Account implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String email;

    private String username;

    private String password;

    private String firstname;

    private String lastname;

    private String phone;

    private Boolean gender;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private Date date_of_birth;

    private String img;

    @Temporal(TemporalType.DATE)
    private Date created_at;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    private Date updated_at;

    @Temporal(TemporalType.DATE)
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

    public Account(String email, String username, String password, String firstname, String lastname) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Account account = (Account) o;
        return Objects.equals(id, account.id) &&
                Objects.equals(firstname, account.firstname) &&
                Objects.equals(lastname, account.lastname);
    }

    @Override
    public String toString() {
        return "Account{" +
                "id= " + id +
                ", firstname= " + firstname + '\'' +
                ", lastname = " + lastname + '\'' +
                '}';
    }
}
