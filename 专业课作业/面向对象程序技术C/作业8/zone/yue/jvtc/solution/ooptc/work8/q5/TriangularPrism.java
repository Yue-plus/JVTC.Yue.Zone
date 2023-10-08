package zone.yue.jvtc.solution.ooptc.work8.q5;


// 三棱柱
public class TriangularPrism implements Shape {
    private final Triangle base;
    private final double height;

    public TriangularPrism(Triangle base, double height, double length) {
        this.base = base;
        this.height = height;
    }

    @Override
    public double getArea() {
        return base.getArea();
    }

    @Override
    public double getPerimeter() {
        return 3 * height + 3 * base.getArea();
    }

    @Override
    public double getSurfaceArea() {
        return base * height + 3 * base * length;
    }

    @Override
    public double getVolume() {
        return base * height * length;
    }
}
