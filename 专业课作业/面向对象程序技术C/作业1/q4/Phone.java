package q4;

import java.math.BigDecimal;

public record Phone(
        String model,
        String size,
        BigDecimal price,
        String specs,
        long stock
) {
    public BigDecimal total() {
        return price.multiply(BigDecimal.valueOf(stock));
    }

    @Override
    public String toString() {
        return model + "\t" + size + "\t" + price + "\t" + specs + "\t" + stock;
    }
}
