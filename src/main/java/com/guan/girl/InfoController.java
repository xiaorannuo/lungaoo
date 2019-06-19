//package com.guan.girl;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpRequest;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.*;
//
//import javax.servlet.http.HttpServletRequest;
//
//@Controller
//public class InfoController {
//    @Autowired
//    private InfoRepository infoRepository;
//    @ResponseBody
//    @PostMapping(value = "/info")
//    public void infolAdd(@RequestParam("username") String username,
//                        @RequestParam("password") String password,
//                         @RequestParam("portrait_path") String portrait_path,
//                         @RequestParam("team") String team){
//        Info info = new Info();
//        info.setUsername(username);
//        info.setPassword(password);
//        info.setPortrait_path(portrait_path);
//        info.setTeam(team);
//         infoRepository.save(info);
//    }
//    @RequestMapping({"","/welcome"}) //这里为空或者是login都能进入该方法
//    public String login(HttpServletRequest request) {
//        //System.out.println("url:"+request.getRequestURI());
//            return "/test";
//        }
//
//
//}
