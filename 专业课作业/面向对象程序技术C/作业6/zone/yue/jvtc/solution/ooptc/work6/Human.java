package zone.yue.jvtc.solution.ooptc.work6;

public class Human {
    private final String name;
    private final int age;

    public Human() {
        this.name = "无名氏";
        this.age = 0;
    }

    public Human(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void showInfo() {
        System.out.println("Human{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}');
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}
