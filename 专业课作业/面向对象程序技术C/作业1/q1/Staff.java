package q1;

public class Staff {
    final String name;
    final String lang;
    final String department;

    public Staff(String name, String lang) {
        this.name = name;
        this.lang = lang;

        switch (lang) {
            case "java" -> this.department = "java 程序开发部门";
            case "C#" -> this.department = "C# 程序开发部门";
            case "asp.net" -> this.department = "asp.net 程序测试部门";
            default -> throw new IllegalArgumentException("公司没有与输入的语言匹配的部门。");
        }
    }

    @Override
    public String toString() {
        return String.format("欢迎 %s 入职本公司，请前往 %s 就职。", name, department);
    }
}
