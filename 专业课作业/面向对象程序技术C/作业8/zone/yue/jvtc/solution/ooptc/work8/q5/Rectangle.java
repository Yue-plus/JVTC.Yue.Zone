package zone.yue.jvtc.solution.ooptc.work8.q5;

// 长方形
public class Rectangle implements Shape {
    private final double length;
    private final double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    public double getArea() {
        return length * width;
    }

    @Override
    public double getPerimeter() {
        return 2 * (length + width);
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