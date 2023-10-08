package q2;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Scanner;

/**
 * <div class="divQuestionTitle">
 *   Q2、编写一个超市购物程序，在一家超市有牙刷、毛巾、水杯、苹果和香蕉五种商品，商品价格如下<br>
 *   <table>
 *       <tbody>
 *           <tr><td width="130">牙刷</td><td width="120">8.8元</td></tr>
 *           <tr><td width="130">毛巾</td><td width="120">10.0元</td></tr>
 *           <tr><td width="130">水杯</td><td width="120">18.8元</td></tr>
 *           <tr><td width="130">苹果</td><td width="120">12.5元</td></tr>
 *           <tr><td width="130">香蕉</td><td width="120">15.5元</td></tr>
 *       </tbody>
 *   </table>
 *   <p>
 *       用户输入商品序列号进行商品购买，用广输入购买数量后计算出所需要花费的钱。
 *       一次性购买结束后，需要用户输入“Y”或“N”，“Y” 代表继续购买. “N”代表购物结束。
 *   </p>
 *   （20 分）
 * </div>
 */
public class Main {
    public static void main(String[] args) {
        final var sc = new Scanner(System.in);
        final var items = new ArrayList<Item>();
        var total = BigDecimal.ZERO;

        items.add(new Item("牙刷", "8.8", 0));
        items.add(new Item("毛巾", "10.0", 0));
        items.add(new Item("水杯", "18.8", 0));
        items.add(new Item("苹果", "12.5", 0));
        items.add(new Item("香蕉", "15.5", 0));

        System.out.println("=====欢迎光临=====");
        for (int i = 0; i < items.size(); i++) {
            System.out.println(i + "\t" + items.get(i).getTitle() + "\t" + items.get(i).getPrice() + "元");
        }

        do {
            System.out.println("请输入要购买的商品序列号：");
            var item = items.get(sc.nextInt());

            System.out.println("请输入购买数量");
            item.addCount(sc.nextLong());

            System.out.println("购买" + item.getCount() + "单位" + item.getTitle() + "需要"
                    + item.getPrice().multiply(BigDecimal.valueOf(item.getCount())) + "元");

            System.out.println("是否进行结算？（Y/N）");
        } while (!sc.next().equals("Y"));

        System.out.println("=====结算=====\n您购买了以下商品：");
        for (int i = 0; i < items.size(); i++) {
            var item = items.get(i);
            total = total.add(item.getPrice().multiply(BigDecimal.valueOf(item.getCount())));
            System.out.println(i + "\t" + item.getTitle() + "\t" + item.getPrice() + "\t" + item.getCount());
        }

        System.out.println("合计收款：" + total + "元");
    }
}
