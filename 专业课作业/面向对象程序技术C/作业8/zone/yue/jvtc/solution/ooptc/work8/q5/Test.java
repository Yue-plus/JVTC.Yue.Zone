package zone.yue.jvtc.solution.ooptc.work8.q5;

/**
 * 应用接口计算图形的面积、周长、表面积、体积。
 * 建立一个接口，再建三角形、长方形、正六边形、圆、三棱柱、长方体、正六棱柱、圆球体类实现接口，完成面积、周长、表面积、体积的计算，并输出结果。
 */
public class Test {
    public static void main(String[] args) {
        System.out.println("一个底为 3 高为 4 三条边长分别为 3、4、5 的三角形的：");
        var triangle = new Triangle(3, 4, 5, 4, 3);
        printlnShapeInfo(triangle);

        System.out.println("一个长为 4 宽为 5 的长方形的：");
        var rectangle = new Rectangle(4, 5);
        printlnShapeInfo(rectangle);

        System.out.println("一个外接圆半径为 3 的正六边形的：");
        var hexagon = new Hexagon(3);
        printlnShapeInfo(hexagon);

        System.out.println("一个半径为 1 的圆形的：");
        var circle = new Circle(1);
        printlnShapeInfo(circle);
    }

    public static void printlnShapeInfo(Shape shape) {
        System.out.println("\t面积是：" + shape.getArea());
        System.out.println("\t周长是：" + shape.getPerimeter());
        System.out.println("\t表面积是：" + shape.getSurfaceArea());
        System.out.println("\t体积是：" + shape.getVolume());
    }
}
