package com.poly.service.impl;

import com.poly.service.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;

@Service
public class EmailServiceImpl implements EmailService {

    private final JavaMailSender javaMailSender;

    public EmailServiceImpl(JavaMailSender javaMailSender){
        this.javaMailSender = javaMailSender;
    }

    @Override
    public CompletableFuture<Void> sendEmail(String subject, String recipient, String content) throws MessagingException {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message,true);
            helper.setSubject(subject);
            helper.setTo(recipient);
            helper.setText(content);
            javaMailSender.send(message);
            return CompletableFuture.completedFuture(null);
        }catch (MessagingException ex){
            return CompletableFuture.failedFuture(ex);
        }
    }
}
