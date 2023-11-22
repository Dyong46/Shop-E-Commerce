package com.poly.Utils;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SessionUtils {
    @Autowired
    HttpSession httpSession;

    public <T> T get(String name, Class<T> type) {
        Object value = httpSession.getAttribute(name);
        if (value != null && type.isInstance(value)) {
            return type.cast(value);
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
