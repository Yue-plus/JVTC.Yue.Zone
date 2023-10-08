package zone.yue.jvtc.solution.ooptc.work5.q1;

public class Test {
    public static void main(String[] args) {
        Hero warrior = new Warrior("战士", 1000, 100);
        Hero mage = new Mage("法师", 800, 200);

        // 战士使用普通攻击攻击法师
        warrior.attack(mage);

        // 法师使用火球术攻击战士
        mage.ultimateAttack(warrior, "火球术");

        // 战士使用猛击攻击法师
        warrior.ultimateAttack(mage, "猛击");
    }
}