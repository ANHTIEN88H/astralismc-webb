// Danh sách mã giảm giá hợp lệ - dễ dàng mở rộng khi cần
const PROMO_CODES = {
  GIAM20: { type: "percent", value: 20 }, // Giảm 20%
  GIAM50K: { type: "fixed", value: 50000 }, // Giảm 50,000đ
};

/**
 * Tính tổng tiền giỏ hàng bao gồm logic giảm giá mã khuyến mãi
 * @param {Array} cartItems - Danh sách sản phẩm [{name, price, quantity}]
 * @param {string} promoCode - Mã giảm giá (tùy chọn)
 * @returns {Object} {total, discount, finalTotal}
 */
export function calculateCartTotal(cartItems, promoCode) {
  // Tính tổng tiền gốc
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  // Tính giảm giá dựa trên mã khuyến mãi
  const promo = PROMO_CODES[promoCode];
  const discount = promo
    ? promo.type === "percent"
      ? Math.floor((total * promo.value) / 100)
      : Math.min(promo.value, total) // Không vượt quá tổng tiền
    : 0;

  // Tính tổng cuối cùng (không âm)
  const finalTotal = Math.max(0, total - discount);

  return { total, discount, finalTotal };
}
