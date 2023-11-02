package com.poly.controller;

import com.poly.entity.Discount;
import com.poly.service.DiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/discount-management")
public class DiscountController {

    @Autowired
    DiscountService discountService;

    @GetMapping("/discounts")
    public List<Discount> getAll(){
        return discountService.getAllDiscount();
    }
    @GetMapping("/find-name")
    public Discount getDiscountByName(@RequestParam("name")String name){
        return discountService.getDiscountByName(name);
    }
    @GetMapping("/{id}")
    public Discount getDiscountById(@PathVariable("id")Integer id){
        return discountService.getDiscountById(id);
    }
    @PostMapping("/discount")
    public Discount postSave(@RequestBody Discount entity){
        return discountService.create(entity);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Discount> updateDiscountById(@PathVariable("id")Integer id,
                                                       @RequestBody Discount formDiscount){
        Discount discountCheck = discountService.getDiscountById(id);
        if(discountCheck != null){
            discountService.update(formDiscount,id);
            return ResponseEntity.ok(formDiscount);
        }else {
            return ResponseEntity.notFound().build();
        }
    }
}
