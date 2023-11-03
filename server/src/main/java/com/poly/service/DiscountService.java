package com.poly.service;

import com.poly.entity.Discount;
import java.util.List;

public interface DiscountService {

    List<Discount> getAllDiscount();

    Discount getDiscountByName(String name);

    Discount getDiscountById(Integer id);

    Discount create(Discount entity);

    Discount update(Discount entity, Integer id);
}
