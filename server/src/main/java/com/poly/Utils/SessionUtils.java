package com.poly.Utils;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SessionUtils {
    @Autowired
    HttpSession httpSession;

    public<T> T get(String name) {
        if(httpSession.getAttribute(name)!= null) {
            return (T) httpSession.getAttribute(name);
        }
        return null;
    }

    public void set(String name, Object value) {
        httpSession.setAttribute(name, value);
    }

    public void remove(String name) {
        httpSession.removeAttribute(name);
    }
}
