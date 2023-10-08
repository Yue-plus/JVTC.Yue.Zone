package zone.yue.oopchomework.w3;

import java.math.BigDecimal;

public class Q3 {
    public static void main(String[] args) {
        var a = new Employee("张三", "男", 3,
                BigDecimal.valueOf(3000), BigDecimal.valueOf(300), BigDecimal.valueOf(600));
        System.out.println(a);
    }
}
