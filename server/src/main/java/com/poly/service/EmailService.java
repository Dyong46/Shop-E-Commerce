package com.poly.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;

@Service
public class EmailService {
    private final JavaMailSender javaMailSender;

    public EmailService(JavaMailSender javaMailSender){
        this.javaMailSender = javaMailSender;
    }

    @Async
    public CompletableFuture<Void> sendEmail(String subject, String recipient, String content) throws MessagingException{
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message,true);
            helper.setSubject(subject);
            helper.setTo(recipient);
            helper.setText(content);
            javaMailSender.send(message);
            System.out.println("send mail");
            return CompletableFuture.completedFuture(null);
        }catch (MessagingException e){
            return CompletableFuture.failedFuture(e);
        }
    }
}
