package com.poly.service;

import com.poly.entity.Discount;
import com.poly.repo.DiscountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class DiscountService {

    @Autowired
    DiscountRepository discountRepository;

    public List<Discount> getAllDiscount(){
        return discountRepository.findAll();
    }
    public Discount getDiscountByName(String name){
        return discountRepository.findDiscountByName(name);
    }
    public Discount getDiscountById(Integer id){
        return discountRepository.findDiscountById(id);
    }
    public Discount create(Discount entity){
        Date date = new Date();
        entity.setIs_active(true);
        entity.setCreated_at(date);
        return discountRepository.save(entity);
    }
    public Discount update(Discount entity,Integer id){
        Discount discount = getDiscountById(id);
        discount.setName(entity.getName());
        discount.setDescription(entity.getDescription());
        discount.setDiscount_percent(entity.getDiscount_percent());
        discount.setIs_active(entity.getIs_active());
        discount.setUpdated_at(new Date());
        return discountRepository.save(discount);
    }
}
