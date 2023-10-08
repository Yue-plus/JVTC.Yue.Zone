package q5;

import java.util.Scanner;

/**
 * Q5、“剪刀石头布”的游戏相信大家都不陌生，本案例要求编写一个剪刀石头布游戏的程序。
 * 程序启动后会随机生成 1~3 的随机数，分别代表剪刀、石头和布，玩家通过键盘输入剪刀、石头和布与电脑进行 5 轮的游戏，赢的次数多的一方为赢家。
 * 若五局皆为平局，则最终结果判为平局。
 */
public class Main {
    public static void main(String[] args) {
        final var sc = new Scanner(System.in);
        final var round = 5;
        var win = 0;
        var lose = 0;
        var even = 0;

        for (int i = 0; i < round; i++) {
            final var pc = (byte) (Math.random() * 3 + 1);
            switch (sc.next()) {
                case "剪刀" -> {
                    if (pc == 1) even++;
                    if (pc == 2) lose++;
                    if (pc == 3) win++;
                }
                case "石头" -> {
                    if (pc == 1) win++;
                    if (pc == 2) even++;
                    if (pc == 3) lose++;
                }
                case "布" -> {
                    if (pc == 1) lose++;
                    if (pc == 2) win++;
                    if (pc == 3) even++;
                }
                default -> System.out.println("我不懂你出的是什么东西？");
            }
        }

        if (even == round) {
            System.out.println("本局游戏平局。");
        } else if (win > lose) {
            System.out.println("你赢了！本局游戏你获胜" + win + "轮。");
        } else {
            System.out.println("你输了！本局游戏你仅获胜" + win + "轮。");
        }
    }
}
