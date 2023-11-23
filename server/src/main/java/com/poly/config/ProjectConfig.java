package com.poly.config;

import com.cloudinary.Cloudinary;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class ProjectConfig {

    @Bean
    public Cloudinary getCloudinary() {
        Map config = new HashMap();
        config.put("cloud_name","do1alc1md");
        config.put("api_key", "924517224715498");
        config.put("api_secret", "HSk2Mi9rvfcNC0dL8xif57HjOoI");
        config.put("secure", true);
        return new Cloudinary(config);
    }
}
