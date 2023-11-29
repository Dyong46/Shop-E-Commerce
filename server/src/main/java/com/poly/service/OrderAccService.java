package com.poly.service;


import com.poly.dto.OrderAccount;
import com.poly.repo.OrderAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderAccService {
    @Autowired
    private OrderAccountRepository orderAccount;

    public List<OrderAccount> getOrderByAcc(Integer idacc){
        return orderAccount.getOrderByAcc(idacc);
    }
    public List<OrderAccount> getOrderByAccAndStatus(Integer idacc,Integer status){
        return orderAccount.getOrderByAccAndStatus(idacc,status);
    }
}
