public class Q2 {
    private record Student(
            String name,
            short age,
            boolean sex
    ) {
        public void read() {
            System.out.printf("%s 正在读书。%n", name);
        }

        @Override
        public String toString() {
            return String.format("%s 今年 %d 岁，性别为 %s", name, age, sex ? "男" : "女");
        }
    }

    public static void main(String[] args) {
        var student = new Student("刘悦阳", (short) 22, true);
        student.read();
        System.out.println(student);
    }
}
