package zone.yue.jvtc.solution.ooptc.work8.q5;

// 圆
public class Circle implements Shape {
    private final double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double getArea() {
        return Math.PI * Math.pow(radius, 2);
    }

    @Override
    public double getPerimeter() {
        return Math.PI * 2 * radius;
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