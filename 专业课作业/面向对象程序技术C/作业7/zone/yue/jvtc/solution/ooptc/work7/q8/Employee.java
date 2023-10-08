package zone.yue.jvtc.solution.ooptc.work7.q8;

// 员工类
class Employee {
    private String name;
    private String address;
    private int id;
    public double salary;

    public Employee(String name, String address, int id, double salary) {
        this.name = name;
        this.address = address;
        this.id = id;
        this.salary = salary;
    }

    public void raiseSalary() {
        salary *= 1.1; // 涨薪10%
    }

    @Override
    public String toString() {
        return "员工姓名：" + name + '；' +
                "地址：" + address + '；' +
                "工号：" + id + '；' +
                "薪资：" + salary + '；';
    }
}
