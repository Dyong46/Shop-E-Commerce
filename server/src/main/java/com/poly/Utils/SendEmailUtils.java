package com.poly.utils;
//package com.poly.Utils;
//
//import jakarta.mail.*;
//import jakarta.mail.internet.AddressException;
//import jakarta.mail.internet.InternetAddress;
//import jakarta.mail.internet.MimeMessage;
//
//import java.util.Date;
//import java.util.Properties;
//
//public class SendEmailUtils {
//    public static void sendEmail(String host, String port, final String userName, final String password,
//                                 String toAddress, String subject, String message) throws AddressException, MessagingException {
//
//        // sets SMTP server properties
//        Properties properties = new Properties();
//        properties.put("mail.transport.protocol", "smtps");
//        properties.put("mail.smtps.host", host);
//        properties.put("mail.smtps.port", port);
//        properties.put("mail.smtps.auth", "true");
//        properties.put("mail.smtps.quitwait","false");
//
//        // creates a new session with an authenticator
//        Authenticator auth = new Authenticator() {
//            public PasswordAuthentication getPasswordAuthentication() {
//                return new PasswordAuthentication(userName, password);
//            }
//        };
//
//        Session session = Session.getInstance(properties, auth);
//
//        // creates a new e-mail message
//        Message msg = new MimeMessage(session);
//
//        msg.setFrom(new InternetAddress(userName));
//        InternetAddress[] toAddresses = { new InternetAddress(toAddress) };
//        msg.setRecipients(Message.RecipientType.TO, toAddresses);
//        msg.setSubject(subject);
//        msg.setSentDate(new Date());
//        msg.setText(message);
//
//        // sends the e-mail
//        Transport.send(msg);
//
//    }
//}
