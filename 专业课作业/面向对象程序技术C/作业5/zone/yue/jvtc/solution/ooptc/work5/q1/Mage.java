package zone.yue.jvtc.solution.ooptc.work5.q1;

public class Mage extends Hero {
    public Mage(String name, int hp, int mp) {
        super(name, hp, mp);
    }

    public void attack(Hero enemy) {
        super.attack(enemy);
        System.out.println(getName() + "使用普通攻击造成了100点伤害");
    }

    public void ultimateAttack(Hero enemy, String attackType) {
        if (attackType.equals("火球术")) {
            enemy.beAttacked(500);
            System.out.println(getName() + "使用火球术造成了500点伤害");
        } else if (attackType.equals("冰封术")) {
            enemy.beAttacked(400);
            System.out.println(getName() + "使用冰封术造成了400点伤害");
        } else {
            System.out.println("该绝招不存在");
        }
    }
}
