package com.poly.controller;

import com.poly.Utils.CookieUtils;
import com.poly.dto.GoogleDTO;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/GGO")
@CrossOrigin("*")
public class LoginController {

    @Autowired
    CookieUtils cookieUtils;

    @GetMapping("/signingoogle")
    public Map<String, Object> currenUser(OAuth2AuthenticationToken oAuth2AuthenticationToken){
        System.out.println(toGoogle(oAuth2AuthenticationToken.getPrincipal().getAttributes()).getEmail());
        return oAuth2AuthenticationToken.getPrincipal().getAttributes();
    }
    public GoogleDTO toGoogle(Map<String,Object> map){
        if(map == null){
            return null;
        }
        GoogleDTO googleDTO = new GoogleDTO();
        googleDTO.setEmail((String) map.get("email"));
        googleDTO.setName((String) map.get("name"));
        googleDTO.setPicture((String) map.get("picture"));
        return googleDTO;
    }
    @GetMapping("/logout")
    public void logoutGG (){
        cookieUtils.remove("JSESSIONID");
        System.out.println("delete success");
    }
}
