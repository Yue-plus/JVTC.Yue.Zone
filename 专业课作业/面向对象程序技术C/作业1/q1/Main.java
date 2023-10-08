package q1;

import java.util.Scanner;

/**
 * Q1、某公司现有 java 程序开发部门、C# 程序开发部门、asp.net 程序测试部门、前端程序开发部门四个部门。
 * 编写一个程序实现新入职的员工的部门分配，要求根据用户输入的员工姓名和应聘语言确定员工应该分配到哪个部门。
 * 若公司没有与输入的语言匹配的部门，则进行相关提示。
 */
public class Main {
    public static void main(String[] args) {
        final var sc = new Scanner(System.in);

        while (true) {
            System.out.println("=====添加员工=====");
            System.out.println("请输入员工姓名：");
            final var name = sc.next();

            System.out.println("请输入员工使用的编程语言（java / C# / asp.net）：");
            final var lang = sc.next();

            var staff = new Staff(name, lang);
            System.out.println(staff);
        }
    }
}
