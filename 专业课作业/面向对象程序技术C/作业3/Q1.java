import java.math.BigDecimal;

/**
 * Q1、编写一个类，实现加减法运算
 * @author Yue_plus
 */
public class Q1 {
    public static void main(String[] args) {
        System.out.println("===================Test Add===================");
        System.out.println(add(100, 90));
        printlnAdd(100.1, -90000000);
        printlnAdd("99999999999999999999", "8123.218391828939329758234");

        System.out.println("===================Test Subtract===================");
        System.out.println(subtract(100, 90));
        printlnSubtract(100.1, -90000000);
        printlnSubtract("99999999999999999999", "8123.218391828939329758234");
    }

    public static void printlnAdd(Object a, Object b) {
        System.out.println(add(a, b));
    }

    public static void printlnSubtract(Object a, Object b) {
        System.out.println(add(a, b));
    }

    public static BigDecimal add(Object a, Object b) {
        return new BigDecimal(a.toString()).add(new BigDecimal(b.toString()));
    }

    public static BigDecimal subtract(Object a, Object b) {
        return new BigDecimal(a.toString()).subtract(new BigDecimal(b.toString()));
    }
}
