package zone.yue.jvtc.solution.ooptc.work5.q2;

public class Test {
    public static void main(String[] args) {
        Hero hero1 = new Hero("张三");
        Hero hero2 = new Hero("李四", 120, 3);

        hero1.printInfo();
        hero2.printInfo();
    }
}