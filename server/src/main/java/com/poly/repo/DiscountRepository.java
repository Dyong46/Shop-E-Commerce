package com.poly.repo;

import com.poly.entity.Discount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DiscountRepository extends JpaRepository<Discount, Integer> {

    @Query("SELECT o FROM Discount o WHERE o.name LIKE '%' + :name + '%'")
    Discount findDiscountByName(String name);

    @Query("select o from  Discount o where  o.id = :id")
    Discount findDiscountById(Integer id);
}
