package com.poly.service;

import com.poly.entity.Address;
import com.poly.repo.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {
    @Autowired
    AddressRepository addressRepository;

    public List<Address> getAddressList() {
        return addressRepository.findAll();
    }

    public List<Address> getAddressById(Integer id) {
        return addressRepository.findAddressByAccountId(id);
    }

    public Address create(Address address) {
        return addressRepository.save(address);
    }

    public Address update(Integer id, Address address){
        if(existsById(id)) {
            return addressRepository.save(address);
        }
        return null;
    }

    public void delete(Integer id) {
        addressRepository.deleteById(id);
    }

    public Boolean existsById(Integer id) {
        return addressRepository.existsById(id);
    }

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
