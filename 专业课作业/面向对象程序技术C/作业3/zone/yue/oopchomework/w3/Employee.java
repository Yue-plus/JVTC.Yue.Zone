package zone.yue.oopchomework.w3;

import java.math.BigDecimal;

@SuppressWarnings("NonAsciiCharacters")
public class Employee {
    private final String 姓名;
    private final boolean 性别;
    private final int 工龄;
    private final BigDecimal 基础工资, 岗位津贴, 效益工资, 应付工资, 个人所得税, 实发工资;

    public Employee(String 姓名, String 性别, int 工龄, BigDecimal 基础工资, BigDecimal 岗位津贴, BigDecimal 效益工资) {
        this.姓名 = 姓名;
        this.性别 = 性别.equals("男");
        this.工龄 = 工龄;
        this.基础工资 = 基础工资;
        this.岗位津贴 = 岗位津贴;
        this.效益工资 = 效益工资;

        // 应付工资(基础工资＋岗位工资＋效益工资）
        this.应付工资 = 基础工资.add(岗位津贴).add(效益工资);

        // 个人所得税（3500 以下免税，超出3500以上部分按 3%缴纳）
        if (应付工资.compareTo(BigDecimal.valueOf(3500)) < 0) {
            this.个人所得税 = BigDecimal.ZERO;
        } else {
            this.个人所得税 = 应付工资.multiply(BigDecimal.valueOf(0.03));
        }

        this.实发工资 = 应付工资.subtract(个人所得税);
    }

    public String get姓名() {
        return 姓名;
    }

    public String get性别() {
        return 性别 ? "男" : "女";
    }

    public int get工龄() {
        return 工龄;
    }

    public BigDecimal get基础工资() {
        return 基础工资;
    }

    public BigDecimal get岗位津贴() {
        return 岗位津贴;
    }

    public BigDecimal get效益工资() {
        return 效益工资;
    }

    public BigDecimal get应付工资() {
        return 应付工资;
    }

    public BigDecimal get个人所得税() {
        return 个人所得税;
    }

    public BigDecimal get实发工资() {
        return 实发工资;
    }

    @Override
    public String toString() {
        return String.format("""
                姓名：%s
                性别：%s
                工龄：%s
                基础工资：%s
                岗位津贴：%s
                效益工资：%s
                应付工资：%s
                个人所得税：%s
                实发工资：%s
                """, get姓名(), get性别(), get工龄(), get基础工资(), get岗位津贴(), get效益工资(),
                get应付工资(), get个人所得税(), get实发工资()).trim();
    }
}
