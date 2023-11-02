package com.poly.repo;

import com.poly.entity.Discount;
import com.poly.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DiscountRepository extends JpaRepository<Discount, Integer> {

    @Query("select o from  Discount o where  o.name = :name")
    Discount findDiscountByName(String name);

    @Query("select o from  Discount o where  o.id = :id")
    Discount findDiscountById(Integer id);
}
