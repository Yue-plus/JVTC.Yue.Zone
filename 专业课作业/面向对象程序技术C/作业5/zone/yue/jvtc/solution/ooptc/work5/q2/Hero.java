package zone.yue.jvtc.solution.ooptc.work5.q2;

public class Hero {
    private String name;
    private int hp;
    private int level;

    public Hero(String name) {
        this.name = name;
        this.hp = 100;
        this.level = 1;
    }

    public Hero(String name, int hp, int level) {
        this.name = name;
        this.hp = hp;
        this.level = level;
    }

    public String getName() {
        return name;
    }

    public int getHp() {
        return hp;
    }

    public int getLevel() {
        return level;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public void printInfo() {
        System.out.println("英雄名字：" + name);
        System.out.println("英雄生命值：" + hp);
        System.out.println("英雄等级：" + level);
    }
}
