package com.guan.girl;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@Controller
public class Testcontroler {
    @RequestMapping(value = "/greeting")
    public ModelAndView test(ModelAndView mv) {
        mv.setViewName("/greeting");
        mv.addObject("title","欢迎使用Thymeleaf!");
        return mv;
    }

    @RequestMapping(value = "/test")
    public String testThymeleaf (Model model){
//        model.addAttribute("name",name);
        return "/common/bootstrapbase";
    }


    @RequestMapping("/index")
    public String index(){
        return "/index";

    }
    @GetMapping("/login")
    public String login(){
        return "/login";

    }
    @RequestMapping("/register")
    public String register(){
        return "/register";

    }
    private Cookie cookie;
    @PostMapping(value = "/login")
    public String girlAdd(Model model, HttpServletResponse response, @RequestParam("username") String username,
                          @RequestParam("password") String password) {
        System.out.println("username:"+username+"   password:"+password );
//        model.addAttribute("flag","1");
//        return "/Middle";
            cookie = new Cookie("uname",username);
            response.addCookie(cookie);
            return "index";
    }


}
