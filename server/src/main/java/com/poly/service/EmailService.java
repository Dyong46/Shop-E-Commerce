package com.poly.service;

import jakarta.mail.MessagingException;
import java.util.concurrent.CompletableFuture;

public interface EmailService {
    public CompletableFuture<Void> sendEmail(String subject, String recipient, String content) throws MessagingException;
}
