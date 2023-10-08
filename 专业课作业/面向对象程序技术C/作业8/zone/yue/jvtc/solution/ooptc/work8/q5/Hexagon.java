package zone.yue.jvtc.solution.ooptc.work8.q5;

// 正六边形
public class Hexagon implements Shape {
    // 外接圆半径
    private final double R;

    public Hexagon(double R) {
        this.R = R;
    }

    @Override
    public double getArea() {
        return (3.0 / 2) * Math.sqrt(3) * Math.pow(R, 2);
    }

    @Override
    public double getPerimeter() {
        return 6 * R;
    }

    @Override
    public double getSurfaceArea() {
        return 2 * getArea();
    }

    @Override
    public double getVolume() {
        return getArea();
    }
}