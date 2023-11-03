package com.poly.repo;

import com.poly.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {
    @Query("select o from Address o where o.account_id.deleted_at = null")
    List<Address> getAllAddress();

    @Query("select o from Address o where o.account_id.id = :id and o.account_id.deleted_at = null")
    List<Address> findAddressByAccountId(Integer id);

    @Query("select o from Address o where o.is_default = TRUE")
    Address findAddressDefault();
}
