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
@RequestMapping("/api/discount")
public class DiscountController {

    @Autowired
    DiscountService discountService;

    @GetMapping("/")
    public List<Discount> getAll(){
        return discountService.getAllDiscount();
    }
    @GetMapping("/finddiscountbyname")
    public Optional<Discount> getDiscountByName(@RequestParam("name")String name){
        return discountService.getDiscountByName(name);
    }
    @GetMapping("/finddiscountbyid")
    public Optional<Discount> getDiscountById(@RequestParam("id")Integer id){
        return discountService.getDiscountById(id);
    }
    @PostMapping("/save")
    public Discount postSave(@RequestBody Discount entity){
        return discountService.create(entity);
    }
    @PutMapping("/update")
    public ResponseEntity<Discount> updateDiscountById(@RequestParam("id")Integer id,
                                                       @RequestBody Discount formDiscount){
        Optional<Discount> discountCheck = discountService.getDiscountById(id);
        if(discountCheck.isPresent()){
            Discount existingDiscount = discountCheck.get();
            existingDiscount.setName(formDiscount.getName());
            existingDiscount.setDescription(formDiscount.getDescription());
            existingDiscount.setDiscount_percent(formDiscount.getDiscount_percent());
            existingDiscount.setIs_active(formDiscount.getIs_active());
            existingDiscount.setUpdated_at(formDiscount.getUpdated_at());
            discountService.update(existingDiscount);
            return ResponseEntity.ok(existingDiscount);
        }else {
            return ResponseEntity.notFound().build();
        }
    }
}
