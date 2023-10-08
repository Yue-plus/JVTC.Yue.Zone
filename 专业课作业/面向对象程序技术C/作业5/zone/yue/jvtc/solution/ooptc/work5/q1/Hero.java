package zone.yue.jvtc.solution.ooptc.work5.q1;

public abstract class Hero {
    private final String name;
    private int hp;
    private int mp;

    public Hero(String name, int hp, int mp) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
    }

    public String getName() {
        return name;
    }

    public int getHp() {
        return hp;
    }

    public int getMp() {
        return mp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public void setMp(int mp) {
        this.mp = mp;
    }

    public void attack(Hero enemy) {
        System.out.println(name + "攻击" + enemy.getName());
        enemy.beAttacked(100);
    }

    public void beAttacked(int damage) {
        hp -= damage;
        System.out.println(name + "受到了" + damage + "点伤害，剩余血量：" + hp);
    }

    public abstract void ultimateAttack(Hero enemy, String attackType);
}
