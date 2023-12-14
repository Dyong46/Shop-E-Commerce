package com.poly.service.impl;

import com.poly.service.StripeService;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

@Service
public class StripeServiceImpl implements StripeService {

    static {
        Stripe.apiKey = "sk_test_51OMt11D4P9vfQl1xtzJB7NPQudTssjhkACdjDLluq5X6G7gA0lZMiNOEV15VBq59jxRkklfaSGMAcdvcqERK7dRW00NWfp6kKb";
    }

    @Override
    public void checkout() throws StripeException {
        SessionCreateParams params = SessionCreateParams.builder()
            .setMode(SessionCreateParams.Mode.PAYMENT)
            .setSuccessUrl("http://localhost:4242/success")
            .setCancelUrl("http://localhost:4242/cancel")
            .addLineItem(
                SessionCreateParams.LineItem.builder()
                    .setQuantity(1L)
                    .setPriceData(
                        SessionCreateParams.LineItem.PriceData.builder()
                            .setCurrency("usd")
                            .setUnitAmount(2000L)
                            .setProductData(
                                SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                    .setName("T-shirt")
                                    .build())
                            .build())
                    .build())
            .build();
        Session session = Session.create(params);
        new ModelAndView(new RedirectView(session.getUrl(), true));
    }
}
