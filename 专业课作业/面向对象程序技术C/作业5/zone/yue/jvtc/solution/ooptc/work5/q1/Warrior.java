package zone.yue.jvtc.solution.ooptc.work5.q1;

public class Warrior extends Hero {
    public Warrior(String name, int hp, int mp) {
        super(name, hp, mp);
    }

    public void attack(Hero enemy) {
        super.attack(enemy);
        System.out.println(getName() + "使用普通攻击造成了100点伤害");
    }

    public void ultimateAttack(Hero enemy, String attackType) {
        if (attackType.equals("猛击")) {
            enemy.beAttacked(300);
            System.out.println(getName() + "使用猛击造成了300点伤害");
        } else if (attackType.equals("旋风斩")) {
            enemy.beAttacked(200);
            System.out.println(getName() + "使用旋风斩造成了200点伤害");
        } else {
            System.out.println("该绝招不存在");
        }
    }
}
