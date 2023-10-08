package q2;

import java.math.BigDecimal;

public class Item {
    private final String title;
    private final BigDecimal price;
    private long count;

    public Item(String title, String price, long count) {
        this.title = title;
        this.price = new BigDecimal(price);
        this.count = count;
    }

    public String getTitle() {
        return title;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void addCount(long n) {
        this.count += n;
    }

    public long getCount() {
        return this.count;
    }
}
