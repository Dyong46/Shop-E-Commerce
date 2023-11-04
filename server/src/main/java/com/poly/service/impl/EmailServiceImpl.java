//package com.poly.service.impl;
//
//import com.poly.Utils.SendEmailUtils;
//import com.poly.entity.Account;
//
//import jakarta.servlet.ServletContext;
//
//public class EmailServiceImpl implements  {
//    private static final String EMAIL_WELCOME_SUBJECT = "Welcome to Shopee Entertaiment";
//    private static final String EMAIL_FORGOT_PASSWORD = "Online Shopee - New Password";
//    private static final String EMAIL_BUY_PRODUCT = "Online Shopee - Thank you";
//    @Override
//    public void sendEmail(ServletContext context, Account recipient, String type) {
//        String host = context.getInitParameter("host");
//        String port = context.getInitParameter("port");
//        String user = context.getInitParameter("user");
//        System.out.println(user);
//        String pass = context.getInitParameter("pass");
//        System.out.println(pass);
//
//        try {
//            String content = null;
//            String subject = null;
//
//            switch (type) {
//                case "welcome":
//                    subject = EMAIL_WELCOME_SUBJECT;
//                    content = "Dear " + recipient.getUsername() + " I have you have a good time!";
//                    break;
//                case "forgot":
//                    subject = EMAIL_FORGOT_PASSWORD;
//                    content = "Dear " + recipient.getUsername() + ", your new password here: " + recipient.getPassword();
//                    break;
//                case "thank":
//                    subject = EMAIL_BUY_PRODUCT;
//                    content = "Dear " + recipient.getUsername() + ", Thank you for trusting and purchasing our products : ";
//                    break;
//                default:
//                    subject = "Shopee Entertainment";
//                    content = "Maybe this email is wrong, don't care about it";
//                    break;
//            }
//            SendEmailUtils.sendEmail(host, port, user, pass, recipient.getEmail(), subject, content);
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        }
//    }
//}
