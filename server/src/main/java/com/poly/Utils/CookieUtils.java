package com.poly.Utils;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class CookieUtils {

    @Autowired
    HttpServletRequest request;

    @Autowired
    HttpServletResponse response;

    public String getValue(String name) {
        Cookie[] cookies = request.getCookies();
        if(cookies != null) {
            for (Cookie cookie : cookies) {
                if(cookie.getName().equalsIgnoreCase(name)) {
                    return cookie.getValue();
                }
            }
        }
        return "";
    }
    public Cookie add(String name, String value, int hours) {
        Cookie cookie = new Cookie(name,value);
        cookie.setMaxAge(hours*60*60);
        cookie.setPath("/");
        response.addCookie(cookie);
        return cookie;
    }
    public void remove(String name) {
        Cookie cookie = new Cookie(name, "");
        cookie.setMaxAge(0);
        cookie.setPath("/");
        response.addCookie(cookie);
    }
}
