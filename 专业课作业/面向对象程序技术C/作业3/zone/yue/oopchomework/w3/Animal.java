package zone.yue.oopchomework.w3;

public class Animal {
    String name;

    Animal(String name) {
        this.name = name;
    }

    public void eat() {
        System.out.println(name + "正在进食");
    }
}
