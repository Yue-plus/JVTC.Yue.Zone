package zone.yue.jvtc.solution.ooptc.work5.q3;

public class Hero extends zone.yue.jvtc.solution.ooptc.work5.q2.Hero {
    public Hero(String name) {
        super(name);
    }

    public Hero(String name, int hp, int level) {
        super(name, hp, level);
    }

    public Hero(String name, int type) {
        super(name);
        if (type == 1) {
            this.setHp(100);
        } else if (type == 2) {
            this.setHp(200);
        } else {
            System.out.println("英雄类型不存在");
        }
    }

    public void printInfo() {
        System.out.println("英雄名字：" + this.getName());
        System.out.println("英雄生命值：" + this.getHp());
        System.out.println("英雄等级：" + this.getLevel());
    }
}
