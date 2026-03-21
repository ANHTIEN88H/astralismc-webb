import { motion } from "framer-motion";
import { useState } from "react";

const MOMO_DEEPLINK_OR_PAYMENT_LINK = "https://me.momo.vn/4GIlinijidIdfeFvixix";
// Prefer API endpoint so the QR "works" like intended on Vercel.
// Also keep fallback to a static image to avoid broken UI if the API route
// is not available in your deploy setup.
const MOMO_QR_IMAGE_SRC = "/api/momo/qr-image";
const MOMO_QR_FALLBACK_SRC = "/momo-qr.png";

const packages = [
  {
    name: "VIP",
    price: "3$ / tháng",
    // TODO: Set correct VND amount according to your MoMo contract.
    amountVnd: 300000,
    perks: ["Prefix VIP", "Kit VIP hằng ngày", "Hàng chờ ưu tiên"],
    accent: "from-emerald-500/40 to-emerald-500/5",
  },
  {
    name: "MVP",
    price: "7$ / tháng",
    // TODO: Set correct VND amount according to your MoMo contract.
    amountVnd: 700000,
    perks: ["Tất cả từ VIP", "Plot /hat /nick", "Particle cosmetic"],
    accent: "from-cyan-400/40 to-cyan-500/5",
  },
  {
    name: "LEGEND",
    price: "15$ / tháng",
    // TODO: Set correct VND amount according to your MoMo contract.
    amountVnd: 1500000,
    perks: ["Tất cả từ MVP", "Cosmetic độc quyền", "Hỗ trợ ưu tiên"],
    accent: "from-amber-400/40 to-rose-500/10",
  },
];

export default function Store() {
  const [qrOpen, setQrOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const closeQr = () => {
    setQrOpen(false);
    setError("");
    setLoading(false);
  };

  const handleBuy = async (p) => {
    setLoading(true);
    setError("");
    try {
      setQrOpen(true);
    } catch (e) {
      setError(String(e?.message || e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="store">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="section-title text-cyan-200 minecraft-title-shadow">
          STORE • DONATE
        </h2>
        <p className="mt-2 text-sm text-gray-300 md:text-base">
          Ủng hộ server và nhận rank đẹp, không phải pay‑to‑win.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="panel relative overflow-hidden p-4"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.accent} opacity-60`}
              />
              <div className="relative space-y-2 text-xs">
                <h3 className="pixel-title text-[11px] text-[#ADD8E6]">
                  {p.name}
                </h3>
                <div className="text-sm font-semibold text-slate-100">
                  {p.price}
                </div>
                <ul className="mt-2 space-y-1 text-[11px] text-slate-200">
                  {p.perks.map((perk) => (
                    <li key={perk}>• {perk}</li>
                  ))}
                </ul>
                <button
                  className="mt-3 w-full rounded-md border border-emerald-400/70 bg-slate-900/80 py-2 text-[11px] font-semibold text-[#ADD8E6] shadow-glowSoft transition hover:bg-emerald-500/20 disabled:opacity-60"
                  onClick={() => handleBuy(p)}
                  disabled={loading}
                >
                  Mua gói
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {qrOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-lg bg-slate-900/95 p-4 shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-[#ADD8E6]">
                  Quét QR để thanh toán MoMo
                </div>
              </div>
              <button
                className="rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-200 hover:bg-slate-800"
                onClick={closeQr}
              >
                Đóng
              </button>
            </div>

            <div className="mt-4 flex flex-col items-center gap-3">
              {error && (
                <div className="w-full rounded-md border border-red-500/60 bg-red-500/10 p-2 text-xs text-red-200">
                  {error}
                </div>
              )}

              <div className="rounded-md bg-white p-3">
                <img
                  src={MOMO_QR_IMAGE_SRC}
                  alt="MoMo QR"
                  className="h-[220px] w-[220px] object-contain"
                  onError={(e) => {
                    e.currentTarget.src = MOMO_QR_FALLBACK_SRC;
                  }}
                />
              </div>

              <div className="text-xs text-slate-300 text-center">
                Quét QR để thanh toán. (Nội dung: nhập tên ingame và gói muốn
                mua)
              </div>

              <a
                className="mt-1 inline-flex w-full items-center justify-center rounded-md border border-[#ADD8E6]/60 bg-slate-900/60 px-3 py-2 text-[11px] font-semibold text-[#ADD8E6] shadow-glowSoft transition hover:bg-emerald-500/20"
                href={MOMO_DEEPLINK_OR_PAYMENT_LINK}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="mr-2 h-7 w-7 rounded-sm bg-white/90 object-contain"
                  src={MOMO_QR_IMAGE_SRC}
                  alt="MoMo QR"
                  onError={(e) => {
                    e.currentTarget.src = MOMO_QR_FALLBACK_SRC;
                  }}
                />
                <span>Mở sang app MoMo để chuyển tiền</span>
              </a>

              {loading && (
                <div className="text-xs text-slate-300">
                  Đang tạo giao dịch...
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
