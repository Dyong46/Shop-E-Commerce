package com.poly.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class ResponseBodyServer {

    private Integer statusCode;

    private String message;

    private Object payload;
}
