package zone.yue.jvtc.solution.ooptc.work7.q8;

// 经理类
class Manager extends Employee {
    private final int level;

    public Manager(String name, String address, int id, double salary, int level) {
        super(name, address, id, salary);
        this.level = level;
    }

    @Override
    public void raiseSalary() {
        salary *= 1.2; // 涨薪20%
    }

    @Override
    public String toString() {
        return super.toString() + "经理等级：" + level + '；';
    }
}

