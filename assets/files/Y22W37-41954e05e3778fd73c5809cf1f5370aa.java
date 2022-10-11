package zone.yue.jvtc.solution.WeeklyWork;

import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

/**
 * @author Yue_plus
 */
@ShellComponent(value = "2022 年第 37 周编程作业")
public class Y22W37 {
    @ShellMethod("输入一个整数，当输入奇数时，输出英文 `odd`，当输入偶数时，输出英文 `even`。")
    public static String digitalJudgment(int n) {
        var isOdd = n % 2 != 0;

        if (isOdd) {
            return "odd";
        } else {
            return "even";
        }
    }
}
