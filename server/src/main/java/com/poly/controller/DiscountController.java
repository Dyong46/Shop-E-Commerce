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
public class DiscountController {

    @Autowired
    DiscountService discountService;

    @GetMapping("/api/discount")
    public List<Discount> getAll(){
        return discountService.getAllDiscount();
    }
    @GetMapping("/api/discount/finddiscountbyname")
    public Optional<Discount> getDiscountByName(@RequestParam("name")String name){
        return discountService.getDiscountByName(name);
    }
    @GetMapping("/api/discount/finddiscountbyid")
    public Optional<Discount> getDiscountById(@RequestParam("id")Integer id){
        return discountService.getDiscountById(id);
    }
    @PostMapping("/api/discount/save")
    public Discount postSave(Discount entity){
        return discountService.create(entity);
    }
    @PutMapping("/api/discount/update")
    public ResponseEntity<Discount> updateDiscountById(@RequestParam("id")Integer id,
                                                       @ModelAttribute("discount")Discount formDiscount){
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
