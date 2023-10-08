public class Q1 {
    public static void main(String[] args) {
        System.out.println(
                add(1, 2) + "\n"
                + add(1, 2 ,3) + "\n"
                + add(1, 2, 3, 4) + "\n"
        );
    }

    public static int add(int a, int b) {
        return a + b;
    }

    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static int add(int a, int b, int c, int d) {
        return a + b + c + d;
    }
}
