import { useState } from "react";

export default function Contact({ onToast }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formData, setFormData] = useState({
    ingame: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const WEBHOOK_URL =
      "https://discord.com/api/webhooks/1485033160868626552/f-CwvU3TO-JzFhTPyzMye4yg_naA2KWmGh0xsCXXvFoKRK6hCOBzAW2YaSrwxKPxhQOg";

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Dòng này sẽ tag sếp ở ngoài bảng Embed để Discord nổ thông báo
          content: "<@1359147263632609460> 🔔 CÓ YÊU CẦU HỖ TRỢ MỚI!",

          embeds: [
            {
              title: "📩 LIÊN HỆ MỚI TỪ WEBSITE",
              color: 0xadd8e6,
              fields: [
                {
                  name: "👤 Ingame",
                  value: formData.ingame || "Trống",
                  inline: true,
                },
                {
                  name: "📧 Email",
                  value: formData.email || "Trống",
                  inline: true,
                },
                { name: "📝 Nội dung", value: formData.message || "Trống" },
              ],
              timestamp: new Date(),
            },
          ],
        }),
      });
      alert("✅ Đã gửi hỗ trợ thành công!");
      setFormData({ ingame: "", email: "", message: "" }); // Gửi xong xóa trắng ô nhập
    } catch (err) {
      alert("❌ Lỗi gửi tin, bạn check lại link Webhook nhé!");
    }
  };

  const handlePurchase = async (rankName, price) => {
    // Sếp có thể dùng link Webhook cũ hoặc tạo một link mới cho kênh #nap-the
    const WEBHOOK_STORE_URL = "DÁN_LINK_WEBHOOK_KÊNH_NẠP_THẺ_VÀO_ĐÂY";

    // Yêu cầu người chơi nhập tên để biết ai mua
    const playerName = prompt("Nhập tên Ingame của bạn để Admin cộng Rank:");
    if (!playerName) return;

    const payload = {
      // Tag @everyone hoặc ID của sếp để báo có tiền về!
      content: "💰 **CÓ ĐƠN HÀNG MỚI ĐANG CHỜ DUYỆT!**",
      embeds: [
        {
          title: "💎 CHI TIẾT GIAO DỊCH",
          color: 0xffa500, // Màu cam cho rực rỡ
          fields: [
            { name: "👤 Người mua", value: playerName, inline: true },
            { name: "🏆 Gói Rank", value: rankName, inline: true },
            { name: "💵 Số tiền", value: price, inline: true },
            {
              name: "📝 Trạng thái",
              value: "Đang chờ Admin kiểm tra ngân hàng...",
            },
          ],
          footer: { text: "AstralisMC Store - Cảm ơn bạn đã ủng hộ!" },
          timestamp: new Date(),
        },
      ],
    };

    try {
      await fetch(WEBHOOK_STORE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      alert(
        "✅ Đã gửi yêu cầu! bạn vui lòng chuyển khoản/nạp thẻ và chờ Admin duyệt nhé.",
      );
    } catch (err) {
      alert("❌ Lỗi gửi đơn hàng!");
    }
  };

  return (
    <section id="contact" className="border-t border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="section-title text-cyan-200 minecraft-title-shadow">
          CONTACT
        </h2>
        <p className="mt-2 text-sm text-gray-300 md:text-base">
          Liên hệ team STAFF hoặc tham gia Discord để được hỗ trợ nhanh nhất.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-[3fr_2fr]">
          <form onSubmit={handleSubmit} className="panel space-y-4 p-6 text-sm">
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Tên ingame / nickname *
              </label>
              <input
                type="text"
                name="name"
                value={formData.ingame}
                onChange={(e) =>
                  setFormData({ ...formData, ingame: e.target.value })
                }
                className="w-full rounded border border-slate-600 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none ring-emerald-500/50 focus:ring"
                placeholder="VD: SteveVN"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Email liên hệ *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded border border-slate-600 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none ring-emerald-500/50 focus:ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Nội dung
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full resize-none rounded border border-slate-600 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none ring-emerald-500/50 focus:ring"
                placeholder="Mô tả vấn đề hoặc ý kiến góp ý..."
              />
            </div>
            <button
              type="submit"
              className="btn-glow w-full justify-center text-sm"
            >
              Gửi liên hệ
            </button>
          </form>

          <div className="panel flex flex-col justify-between space-y-4 p-6 text-sm">
            <div>
              <h3 className="text-base font-semibold text-slate-100">
                Discord Community
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Tham gia Discord để chat với cộng đồng, nhận thông báo update &
                support nhanh hơn.
              </p>
            </div>
            <a
              href="https://discord.gg/rzBWcVMp"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-indigo-400/70 bg-slate-950/80 py-3 text-sm font-semibold text-indigo-200 shadow-glowSoft transition hover:bg-indigo-500/20"
            >
              💬 Join Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
