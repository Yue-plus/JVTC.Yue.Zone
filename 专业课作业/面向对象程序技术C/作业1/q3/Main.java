package q3;

/**
 * <div class="divQuestionTitle">
 * Q3、编写一个智能购物计算小程序，在一家商店有书本、铅笔、橡皮、可乐、零食五种商品，商品价格如下表所示。
 * <table>
 *     <tbody>
 *         <tr><td width="232">商品名称</td><td width="232">价格</td></tr>
 *         <tr><td width="232">书本</td><td width="232">12元</td></tr>
 *         <tr><td width="232">铅笔</td><td width="232">1元</td></tr>
 *         <tr><td width="232">橡皮</td><td width="232">2元</td></tr>
 *         <tr><td width="232">可乐</td><td width="232">3元</td></tr>
 *         <tr><td width="232">零食</td><td width="232">5元</td></tr>
 *     </tbody>
 * </table>
 *
 * <p>假如你带了20元，且必须购买一本书，剩余的钱还可以购买哪种商品，可以购买几件，购买完后又能剩余多少钱？<br></p>
 * （20 分）
 * </div>
 */
public class Main {
    public static void main(String[] args) {
        // 没看懂这题想考我啥？
        System.out.println("""
                剩下的 8 元可以购买：
                - 1 份零食；1 份可乐；剩余 0 元；
                - 1 份零食；1 份橡皮；1 份铅笔；剩余 0 元；
                - 2 份可乐；1 份橡皮；剩余 0 元；
                - 4 份橡皮；剩余 0 元；
                - 8 份铅笔；剩余 0 元；
                - ……
                """);
    }
}
