//package com.guan.girl;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/hello")
//public class HelloController {
//    @Autowired
//    private GirlProperties girlProperties;
//    @GetMapping(value = "/say")
//    public String say(@RequestParam(value = "id",required = false,defaultValue = "0") Integer myid){
//        return "id:"+myid;
//    }
//}
