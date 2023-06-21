package io.glassvue.srvcs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

    @GetMapping("/")
    public String index() {
        return "index";
    }
    @GetMapping("/index.html")
    public String indexHtml() {
        return "index";
    }
    @GetMapping("/about.html")
    public String about() {
        return "about";
    }
    @GetMapping("/contact.html")
    public String contact() {
        return "contact";
    }

    @GetMapping("/services.html")
    public String services() {
        return "services";
    }
}
