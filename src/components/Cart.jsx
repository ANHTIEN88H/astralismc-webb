import { useState, useEffect } from "react";
import { calculateCartTotal } from "../utils/cartUtils";

// Dữ liệu sản phẩm mẫu để thêm vào giỏ
const shopItems = [
  {
    id: 1,
    name: "Rank VIP",
    price: 100000,
    icon: "🌿",
    color: "#34d399",
    desc: "Prefix trò chuyện + Kit hằng ngày",
  },
  {
    id: 2,
    name: "Rank MVP",
    price: 200000,
    icon: "💠",
    color: "#22d3ee",
    desc: "Fly trong lobby + 2x điểm sự kiện",
  },
  {
    id: 3,
    name: "Rank LEGEND",
    price: 350000,
    icon: "🔥",
    color: "#f43f5e",
    desc: "Aura độc quyền + Truy cập dungeon",
  },
  {
    id: 4,
    name: "Chìa khóa Thần Bí",
    price: 50000,
    icon: "🗝️",
    color: "#a78bfa",
    desc: "Mở rương Gacha tại Spawn",
  },
  {
    id: 5,
    name: "Gói Khởi Đầu",
    price: 80000,
    icon: "🎒",
    color: "#94a3b8",
    desc: "Giáp sắt + Vũ khí cơ bản",
  },
  {
    id: 6,
    name: "Bảo hiểm Túi Đồ",
    price: 120000,
    icon: "🛡️",
    color: "#fb923c",
    desc: "Giữ đồ khi chết (24h)",
  },
];

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  // Tính tổng tiền bằng hàm đã test
  const { total, discount, finalTotal } = calculateCartTotal(
    cart.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })),
    promoApplied ? promoCode : "",
  );

  // Thêm sản phẩm vào giỏ
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    showNotification(`Đã thêm ${item.name} vào giỏ hàng!`);
  };

  // Xóa sản phẩm khỏi giỏ
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  // Tăng/giảm số lượng
  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((i) => {
        if (i.id === id) {
          const newQty = i.quantity + delta;
          return newQty > 0 ? { ...i, quantity: newQty } : i;
        }
        return i;
      }),
    );
  };

  // Áp dụng mã giảm giá
  const applyPromo = () => {
    const validCodes = ["GIAM20", "GIAM50K"];
    if (validCodes.includes(promoCode.toUpperCase())) {
      setPromoApplied(true);
      showNotification("Áp dụng mã giảm giá thành công!");
    } else {
      showNotification("Mã giảm giá không hợp lệ!");
    }
  };

  // Hiển thị thông báo
  const showNotification = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // Format tiền VND
  const formatMoney = (num) =>
    num.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
            🛒 GIỎ HÀNG
          </h1>
          <p className="text-purple-300 mt-2 text-lg">
            Thêm sản phẩm và thanh toán ngay
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Danh sách sản phẩm */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
              <h2 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                <span>🏪</span> Cửa hàng
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {shopItems.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="text-4xl group-hover:scale-110 transition-transform duration-300"
                        style={{ filter: `drop-shadow(0 0 8px ${item.color})` }}
                      >
                        {item.icon}
                      </span>
                      <div className="flex-1">
                        <h3
                          className="font-bold text-lg"
                          style={{ color: item.color }}
                        >
                          {item.name}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">
                          {item.desc}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-green-400 font-bold text-lg">
                            {formatMoney(item.price)}
                          </span>
                          <button
                            onClick={() => addToCart(item)}
                            className="px-4 py-2 rounded-xl font-bold text-sm text-black transition-all duration-200 hover:scale-105 active:scale-95"
                            style={{ background: item.color }}
                          >
                            + Thêm
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Giỏ hàng & Thanh toán */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-4">
              {/* Cart Items */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
                <h2 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                  <span>🛍️</span> Giỏ hàng ({cart.length})
                </h2>

                {cart.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <span className="text-5xl block mb-3">🛒</span>
                    <p>Giỏ hàng trống</p>
                    <p className="text-sm mt-1">Hãy thêm sản phẩm!</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/5"
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-white truncate">
                            {item.name}
                          </p>
                          <p className="text-green-400 text-sm">
                            {formatMoney(item.price)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition"
                          >
                            -
                          </button>
                          <span className="text-white font-bold w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-7 h-7 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-red-400 font-bold transition ml-1"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Promo Code */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6">
                <h3 className="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">
                  <span>🎁</span> Mã giảm giá
                </h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Nhập mã (VD: GIAM20)"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition"
                    disabled={promoApplied}
                  />
                  <button
                    onClick={applyPromo}
                    disabled={promoApplied || !promoCode}
                    className={`px-5 py-3 rounded-xl font-bold transition-all duration-200 ${
                      promoApplied
                        ? "bg-green-500/30 text-green-400 cursor-not-allowed"
                        : "bg-purple-600 hover:bg-purple-500 text-white hover:scale-105 active:scale-95"
                    }`}
                  >
                    {promoApplied ? "✓" : "Áp dụng"}
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-green-400 text-sm mt-2">
                    ✓ Đã áp dụng: {promoCode.toUpperCase()}
                  </p>
                )}
              </div>

              {/* Summary */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  📋 Tóm tắt đơn hàng
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-300">
                    <span>Tạm tính:</span>
                    <span className="font-bold">{formatMoney(total)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-400">
                      <span>Giảm giá:</span>
                      <span className="font-bold">
                        -{formatMoney(discount)}
                      </span>
                    </div>
                  )}
                  <div className="border-t border-white/20 pt-3">
                    <div className="flex justify-between text-xl">
                      <span className="text-white font-bold">Tổng cộng:</span>
                      <span className="text-yellow-400 font-bold">
                        {formatMoney(finalTotal)}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  disabled={cart.length === 0}
                  className={`w-full mt-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                    cart.length === 0
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-400 hover:to-orange-400 hover:scale-[1.02] active:scale-95 shadow-lg shadow-orange-500/30"
                  }`}
                >
                  {cart.length === 0
                    ? "🛒 Giỏ hàng trống"
                    : "💳 THANH TOÁN NGAY"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-slate-900/90 backdrop-blur-lg border border-white/20 px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3">
            <span className="text-green-400 text-xl">✓</span>
            <span className="text-white font-medium">{toastMsg}</span>
          </div>
        </div>
      )}
    </div>
  );
}
