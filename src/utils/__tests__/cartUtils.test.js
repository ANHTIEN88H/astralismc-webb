import { describe, it, expect } from "vitest";
import { calculateCartTotal } from "../cartUtils";

describe("calculateCartTotal", () => {
  // Test 1: Tính tổng giỏ hàng bình thường (không có mã giảm giá)
  it("nên trả về tổng tiền chính xác khi không có mã giảm giá", () => {
    const cartItems = [
      { name: "Rank VIP", price: 100000, quantity: 1 },
      { name: "Rank MVP", price: 200000, quantity: 2 },
    ];

    const result = calculateCartTotal(cartItems);

    // 100000 * 1 + 200000 * 2 = 500000
    expect(result.total).toBe(500000);
    expect(result.discount).toBe(0);
    expect(result.finalTotal).toBe(500000);
  });

  // Test 2: Giỏ hàng rỗng
  it("nên trả về 0 khi giỏ hàng rỗng", () => {
    const result = calculateCartTotal([]);

    expect(result.total).toBe(0);
    expect(result.discount).toBe(0);
    expect(result.finalTotal).toBe(0);
  });

  // Test 3: Áp dụng mã giảm giá phần trăm (ví dụ: GIAM20 giảm 20%)
  it("nên áp dụng đúng mã giảm giá phần trăm", () => {
    const cartItems = [{ name: "Rank VIP", price: 100000, quantity: 1 }];

    const result = calculateCartTotal(cartItems, "GIAM20");

    // Total: 100000, Discount: 20%, Final: 80000
    expect(result.total).toBe(100000);
    expect(result.discount).toBe(20000);
    expect(result.finalTotal).toBe(80000);
  });

  // Test 4: Áp dụng mã giảm giá cố định (ví dụ: GIAM50K giảm 50000)
  it("nên áp dụng đúng mã giảm giá cố định", () => {
    const cartItems = [{ name: "Rank VIP", price: 100000, quantity: 1 }];

    const result = calculateCartTotal(cartItems, "GIAM50K");

    // Total: 100000, Discount: 50000, Final: 50000
    expect(result.total).toBe(100000);
    expect(result.discount).toBe(50000);
    expect(result.finalTotal).toBe(50000);
  });

  // Test 5: Mã giảm giá không hợp lệ
  it("nên bỏ qua mã giảm giá không hợp lệ", () => {
    const cartItems = [{ name: "Rank VIP", price: 100000, quantity: 1 }];

    const result = calculateCartTotal(cartItems, "INVALID_CODE");

    expect(result.total).toBe(100000);
    expect(result.discount).toBe(0);
    expect(result.finalTotal).toBe(100000);
  });

  // Test 6: Số lượng sản phẩm > 1
  it("nên tính đúng tổng khi số lượng sản phẩm lớn hơn 1", () => {
    const cartItems = [{ name: "Rank VIP", price: 100000, quantity: 3 }];

    const result = calculateCartTotal(cartItems);

    // 100000 * 3 = 300000
    expect(result.total).toBe(300000);
    expect(result.discount).toBe(0);
    expect(result.finalTotal).toBe(300000);
  });

  // Test 7: Mã giảm giá không được vượt quá tổng tiền
  it("nên đảm bảo tổng cuối cùng không âm khi giảm giá cố định lớn hơn tổng", () => {
    const cartItems = [{ name: "Rank VIP", price: 30000, quantity: 1 }];

    const result = calculateCartTotal(cartItems, "GIAM50K");

    // Total: 30000, Discount: 30000 (không vượt quá total), Final: 0
    expect(result.total).toBe(30000);
    expect(result.discount).toBe(30000);
    expect(result.finalTotal).toBe(0);
  });

  // Test 8: Nhiều sản phẩm khác nhau
  it("nên tính đúng tổng cho nhiều sản phẩm khác nhau", () => {
    const cartItems = [
      { name: "Rank VIP", price: 50000, quantity: 2 },
      { name: "Rank MVP", price: 150000, quantity: 1 },
      { name: "Key Crate", price: 25000, quantity: 4 },
    ];

    const result = calculateCartTotal(cartItems);

    // 50000*2 + 150000*1 + 25000*4 = 100000 + 150000 + 100000 = 350000
    expect(result.total).toBe(350000);
    expect(result.discount).toBe(0);
    expect(result.finalTotal).toBe(350000);
  });
});
