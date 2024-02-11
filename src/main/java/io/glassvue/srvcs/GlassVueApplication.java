package io.glassvue.srvcs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
public class GlassVueApplication {

    public static void main(String[] args) {
        SpringApplication.run(GlassVueApplication.class, args);
    }

}
