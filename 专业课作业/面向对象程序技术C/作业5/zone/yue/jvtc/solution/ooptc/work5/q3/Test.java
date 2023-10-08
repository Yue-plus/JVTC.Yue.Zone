package zone.yue.jvtc.solution.ooptc.work5.q3;

public class Test {
    public static void main(String[] args) {
        Hero hero1 = new Hero("张三");
        Hero hero2 = new Hero("李四", 120, 3);
        Hero hero3 = new Hero("王五", 1);
        Hero hero4 = new Hero("赵六", 2);

        hero1.printInfo();
        hero2.printInfo();
        hero3.printInfo();
        hero4.printInfo();
    }
}
