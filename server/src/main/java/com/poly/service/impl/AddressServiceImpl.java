package com.poly.service.impl;

import com.poly.entity.Address;
import com.poly.repo.AddressRepository;
import com.poly.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressServiceImpl implements AddressService {
    @Autowired
    AddressRepository addressRepository;

    @Override
    public List<Address> getAddressList() {
        return addressRepository.findAll();
    }

    @Override
    public List<Address> getAddressById(Integer id) {
        return addressRepository.findAddressByAccountId(id);
    }

    @Override
    public Address create(Address address) {
        return addressRepository.save(address);
    }

    @Override
    public Address update(Integer id, Address address){
        if(existsById(id)) {
            return addressRepository.save(address);
        }
        return null;
    }

    @Override
    public void delete(Integer id) throws Exception {
        Address address = addressRepository.findById(id).orElse(null);
        if(address == null) throw new Exception("Can't find address");
        else if(address.getIs_default()) throw new Exception("Can't delete default account");
        addressRepository.deleteById(id);
    }

    @Override
    public Boolean existsById(Integer id) {
        return addressRepository.existsById(id);
    }

    @Override
    public Address changeDefault(Integer id, Integer idAddress) {
        Address addressDefault = addressRepository.findAddressDefaultById(id);
        addressDefault.setIs_default(false);
        addressRepository.save(addressDefault);

        Address address = addressRepository.findById(id).orElse(null);
        if(address == null) return null;
        address.setIs_default(true);
        return addressRepository.save(address);
    }
}
