package zone.yue.jvtc.solution.ooptc.work7.q8;

// 主函数
public class Test {
    public static void main(String[] args) {
        Employee[] staff = new Employee[2];
        staff[0] = new Employee("Tom", "Beijing", 1001, 5000);;
        staff[1] = new Manager("Jerry", "Shanghai", 1002, 8000, 2);

        for (Employee e : staff) {
            e.raiseSalary(); // 多态：根据对象类型调用对应涨工资的方法
            System.out.println(e);
        }
    }
}
