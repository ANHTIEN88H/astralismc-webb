import { motion } from "framer-motion";
import { useState } from "react";

const MOMO_DEEPLINK_OR_PAYMENT_LINK = "https://me.momo.vn/4GIlinijidIdfeFvixix";
const MOMO_QR_IMAGE_SRC = "/api/momo/qr-image";
const MOMO_QR_FALLBACK_SRC = "/momo-qr.png";

const packages = [
  {
    name: "VIP",
    price: "3$ / tháng",
    perks: ["Prefix VIP", "Kit VIP hằng ngày", "Hàng chờ ưu tiên"],
    accent: "from-emerald-500/40 to-emerald-500/5",
    color: "text-emerald-400",
  },
  {
    name: "MVP",
    price: "7$ / tháng",
    perks: ["Tất cả từ VIP", "Plot /hat /nick", "Particle cosmetic"],
    accent: "from-cyan-400/40 to-cyan-500/5",
    color: "text-cyan-400",
  },
  {
    name: "LEGEND",
    price: "15$ / tháng",
    perks: ["Tất cả từ MVP", "Cosmetic độc quyền", "Hỗ trợ ưu tiên"],
    accent: "from-amber-400/40 to-rose-500/10",
    color: "text-amber-400",
  },
];

export default function Store() {
  const [qrOpen, setQrOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [coupon, setCoupon] = useState("");

  const closeQr = () => {
    setQrOpen(false);
    setError("");
    setLoading(false);
  };

  const handlePurchase = async (rankName, price) => {
    const playerName = prompt(
      `Sếp mua gói ${rankName}, nhập tên Ingame để Admin xác nhận nhé:`,
    );
    if (!playerName) return;

    setLoading(true);
    const WEBHOOK_URL =
      "https://discord.com/api/webhooks/1485033160868626552/f-CwvU3TO-JzFhTPyzMye4yg_naA2KWmGh0xsCXXvFoKRK6hCOBzAW2YaSrwxKPxhQOg";

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: "<@1359147263632609460> 💰 **CÓ ĐƠN HÀNG MỚI TỪ STORE!**",
          embeds: [
            {
              title: "💎 CHI TIẾT GIAO DỊCH",
              color: 0xffa500,
              fields: [
                { name: "👤 Người mua", value: playerName, inline: true },
                { name: "🏆 Gói mua", value: rankName, inline: true },
                { name: "💵 Giá tiền", value: price, inline: true },
                {
                  name: "🎫 Coupon",
                  value: coupon || "Không có",
                  inline: true,
                },
              ],
              footer: { text: "AstralisMC Store" },
              timestamp: new Date(),
            },
          ],
        }),
      });
      setQrOpen(true);
    } catch (err) {
      alert("Lỗi gửi đơn hàng!");
      setError("Không thể kết nối đến hệ thống thông báo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="store" className="py-10 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="pixel-title text-center text-4xl text-yellow-500 minecraft-text-shadow uppercase tracking-widest">
          STORE • DONATE
        </h2>
        <p className="mt-4 text-center text-cyan-100 max-w-2xl mx-auto">
          Ủng hộ server và nhận rank đẹp, giúp server duy trì và phát triển bền
          vững.
        </p>

        {/* CÁC GÓI NẠP */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              whileHover={{ y: -10 }}
              className="panel relative overflow-hidden p-8 border-4 border-[#3c3c3c] bg-[#161618]/90 shadow-2xl rounded-lg"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-30 pointer-events-none`}
              />
              <div className="relative space-y-4">
                <h3
                  className={`pixel-title text-2xl text-center ${p.color} minecraft-text-shadow-dark`}
                >
                  {p.name}
                </h3>
                <div className="text-center text-2xl font-bold text-white">
                  {p.price}
                </div>
                <ul className="space-y-3 text-slate-300 min-h-[120px]">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm">
                      <span className="text-yellow-500">•</span> {perk}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 bg-[#3c3c3c] hover:bg-[#4a4a4a] text-white font-bold rounded border-b-4 border-black active:border-b-0 active:translate-y-[2px] transition-all uppercase text-xs"
                  onClick={() => handlePurchase(p.name, p.price)}
                  disabled={loading}
                >
                  {loading ? "Đang xử lý..." : "Mua ngay"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ô NHẬP MÃ GIẢM GIÁ (PHẦN MỚI THÊM) */}
        <div className="max-w-md mx-auto mt-16 p-6 bg-[#161618]/80 border-4 border-[#3c3c3c] rounded-md shadow-inner text-center">
          <h3 className="pixel-title text-xs text-slate-400 mb-4 uppercase tracking-tighter">
            Have a coupon code?
          </h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Mã giảm giá..."
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="flex-grow h-11 px-4 bg-black/60 border-2 border-[#545454] text-yellow-400 focus:outline-none focus:border-yellow-500 rounded font-mono text-sm"
            />
            <button className="px-6 bg-[#555555] border-b-4 border-black text-white font-bold hover:bg-[#666666] active:border-b-0 active:translate-y-[2px] rounded uppercase text-xs">
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* POPUP QR MOMO (GIỮ NGUYÊN) */}
      {qrOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-lg bg-slate-900 border-4 border-[#3c3c3c] p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <span className="pixel-title text-xs text-cyan-300">
                MoMo Payment
              </span>
              <button
                className="text-slate-500 hover:text-white"
                onClick={closeQr}
              >
                [X] Đóng
              </button>
            </div>

            <div className="bg-white p-3 rounded-md mx-auto w-fit">
              <img
                src={MOMO_QR_IMAGE_SRC}
                alt="MoMo QR"
                className="h-[200px] w-[200px]"
                onError={(e) => (e.currentTarget.src = MOMO_QR_FALLBACK_SRC)}
              />
            </div>

            <div className="mt-4 text-center space-y-3">
              <p className="text-[11px] text-slate-400">
                Nội dung chuyển khoản: <br />
                <strong>Tên Ingame + Tên Gói</strong>
              </p>
              <a
                href={MOMO_DEEPLINK_OR_PAYMENT_LINK}
                target="_blank"
                rel="noreferrer"
                className="block w-full py-2 bg-[#A50064] text-white text-xs font-bold rounded hover:bg-[#d80082] transition-colors"
              >
                MỞ APP MOMO
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
