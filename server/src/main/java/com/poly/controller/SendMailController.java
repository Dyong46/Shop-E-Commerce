package com.poly.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class SendMailController {

    @Autowired
    JavaMailSender javaMailSender;

    @PostMapping("/api/sendmail")
    public String sendMail(@RequestParam("to")String to,
                           @RequestParam("subject")String subject,
                           @RequestParam("content")String content){
        SimpleMailMessage smg = new SimpleMailMessage();
        smg.setTo(to);
        smg.setSubject(subject);
        smg.setText(content);
        javaMailSender.send(smg);
        return "true";
    }
}
