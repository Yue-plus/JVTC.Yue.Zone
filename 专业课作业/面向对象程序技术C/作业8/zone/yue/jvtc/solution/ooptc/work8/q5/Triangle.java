package zone.yue.jvtc.solution.ooptc.work8.q5;

// 三角形
public class Triangle implements Shape {
    private double base;
    private double height;
    private double side1;
    private double side2;
    private double side3;

    public Triangle(double base, double height, double side1, double side2, double side3) {
        this.base = base;
        this.height = height;
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    public double getArea() {
        return 0.5 * base * height;
    }

    public double getPerimeter() {
        return side1 + side2 + side3;
    }

    public double getSurfaceArea() {
        return 2 * getArea();
    }

    public double getVolume() {
        return getArea();
    }
}

