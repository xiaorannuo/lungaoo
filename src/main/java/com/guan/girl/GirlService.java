//package com.guan.girl;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import javax.persistence.Transient;
//
//@Service
//public class GirlService {
//    @Autowired
//    private GirlRepository girlRepository;
//    @Transactional
//    public void insertTwo(){
//        Girl girlA = new Girl();
//        girlA.setAge(18);
//        girlA.setCupSize("A");
//        girlRepository.save(girlA);
//
//        Girl girlB = new Girl();
//        girlB.setAge(19);
//        girlB.setCupSize("B");
//        girlRepository.save(girlB);
//    }
//}
