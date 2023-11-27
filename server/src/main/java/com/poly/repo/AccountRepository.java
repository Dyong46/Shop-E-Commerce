package com.poly.repo;

import com.poly.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
    @Query("select o from Account o where o.email = :email and o.password = :password AND o.deleted_at IS NULL")
    Account findAccountByEmailAndPassword(String email, String password);
    
    @Query("select o from Account o where o.email = :email AND o.deleted_at IS NULL")
    Account findByEmail(String email);

    @Query("select o from  Account o where  o.id = :id AND o.deleted_at is null ")
    Account findByAccountId(Integer id);

    @Query("select o from Account o where o.id = :id and o.password = :password AND o.deleted_at IS NULL")
    Account findAccountByIdAndPassword(Integer id, String password);
}
