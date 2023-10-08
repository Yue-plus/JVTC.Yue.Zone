package q4;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Scanner;

/**
 * Q4、现要对华为和小米两种手机产品进行入库，本案例要求编写一个模拟商品入库的程序，
 * 可以在控制台输入入库商品的数量，最后打印出仓库中所有商品详细信息以及所有商品的总库存数和库存商品总金额。
 * <ul>商品信息如下：
 *   <li> 品牌型号
 *   <li> 尺寸
 *   <li> 价格
 *   <li> 配置
 *   <li> 库存
 *   <li> 总价
 * </ul>
 */
public class Main {
    public static void main(String[] args) {
        System.out.println("=====一个模拟商品入库的程序=====");

        final var db = new ArrayList<Phone>();
        final var sc = new Scanner(System.in);

        db.add(new Phone(
                "     Xiaomi 13 Pro",
                "6.73inch",
                new BigDecimal("5399"),
                "8GB+256GB",
                0
        ));

        db.add(new Phone(
                "HUAWEI Mate 50 Pro",
                "6.74inch",
                new BigDecimal("6799"),
                "    256GB",
                0
        ));

        do {
            printAllPhone(db);

            System.out.println("指令 'add'|'minus' <id> <number> ','|';'");
            var cmd = sc.next();

            switch (cmd) {
                case "add" -> {
                    var id = sc.nextInt();
                    var item = db.get(id);
                    var number = sc.nextInt();
                    db.set(id, new Phone(
                            item.model(),
                            item.size(),
                            item.price(),
                            item.specs(),
                            (item.stock() + number)
                    ));
                }
                case "minus" -> {
                    var id = sc.nextInt();
                    var item = db.get(id);
                    var number = sc.nextInt();
                    db.set(id, new Phone(
                            item.model(),
                            item.size(),
                            item.price(),
                            item.specs(),
                            (item.stock() - number)
                    ));
                }
            }
        } while (!sc.next().equals(";"));

        printAllPhone(db);


    }

    private static void printAllPhone(ArrayList<Phone> db) {
        // 输出所有库存手机
        System.out.println("============\nID\t品牌型号\t尺寸\t价格\t配置\t库存\t总价");
        for (int i = 0; i < db.size(); i++) {
            System.out.println(String.valueOf(i) + db.get(i));
        }
        sumAllPhoneValue(db);
    }

    private static void sumAllPhoneValue(ArrayList<Phone> db) {
        BigDecimal value = BigDecimal.ZERO;
        for (Phone phone : db) {
            value = value.add(phone.total());
        }

        System.out.println("当前库存价值：" + value);
    }
}
