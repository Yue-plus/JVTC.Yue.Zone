package zone.yue.jvtc.solution.ooptc.work6;

public class Student extends Human {
    private final boolean sex;

    Student() {
        super();
        this.sex = true;
    }

    Student(String name, int age, boolean sex) {
        super(name, age);
        this.sex = sex;
    }

    public void showInfo() {
        System.out.println("Student{" +
                "name='" + this.getName() + '\'' +
                ", age=" + this.getAge() +
                ", sex=" + this.getSex() +
                '}');
    }

    public String getSex() {
        return sex ? "男" : "女";
    }
}
