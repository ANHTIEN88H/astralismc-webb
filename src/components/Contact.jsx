import { useState } from "react";

export default function Contact({ onToast }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      onToast("Vui lòng nhập tên và email.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      onToast("Email không hợp lệ.");
      return;
    }
    onToast("Đã gửi yêu cầu (demo, không gửi backend).");
    setForm({ name: "", email: "", message: "" });
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
          <form onSubmit={handleSubmit} className="panel space-y-3 p-4 text-xs">
            <div>
              <label className="mb-1 block text-[11px] text-slate-300">
                Tên ingame / nickname *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded border border-slate-600 bg-slate-950/70 px-3 py-2 text-xs text-slate-100 outline-none ring-emerald-500/50 focus:ring"
                placeholder="VD: SteveVN"
              />
            </div>
            <div>
              <label className="mb-1 block text-[11px] text-slate-300">
                Email liên hệ *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded border border-slate-600 bg-slate-950/70 px-3 py-2 text-xs text-slate-100 outline-none ring-emerald-500/50 focus:ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-[11px] text-slate-300">
                Nội dung
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="w-full resize-none rounded border border-slate-600 bg-slate-950/70 px-3 py-2 text-xs text-slate-100 outline-none ring-emerald-500/50 focus:ring"
                placeholder="Mô tả vấn đề hoặc ý kiến góp ý..."
              />
            </div>
            <button
              type="submit"
              className="btn-glow w-full justify-center text-xs"
            >
              Gửi liên hệ
            </button>
          </form>

          <div className="panel flex flex-col justify-between space-y-3 p-4 text-xs">
            <div>
              <h3 className="text-[11px] font-semibold text-slate-100">
                Discord Community
              </h3>
              <p className="mt-1 text-[11px] text-slate-300">
                Tham gia Discord để chat với cộng đồng, nhận thông báo update &
                support nhanh hơn.
              </p>
            </div>
            <a
              href="https://discord.gg/rzBWcVMp"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-indigo-400/70 bg-slate-950/80 py-2 text-[11px] font-semibold text-indigo-200 shadow-glowSoft transition hover:bg-indigo-500/20"
            >
              💬 Join Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
