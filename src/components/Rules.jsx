import { motion } from "framer-motion";

const discordRules = [
  {
    n: 1,
    text: "Không toxic và spam, hãy tôn trọng lẫn nhau và có ý thức chung.",
  },
  {
    n: 2,
    text: "Không quấy rối, chia rẽ, xúc phạm hay công kích cá nhân hoặc tập thể.",
  },
  {
    n: 3,
    text: "Không thảo luận về chính trị hoặc quân sự để tránh những định kiến sai sự thật và xuyên tạc.",
  },
  {
    n: 4,
    text: "Đăng ảnh, liên kết nội dung đồi truỵ/xuyên tạc văn hoá hoặc không phù hợp với thuần phong mỹ tục của Việt Nam là bị nghiêm cấm.",
  },
  {
    n: 5,
    text: "Không ping trực tiếp nhân sự: hãy vào `#question` nếu bạn muốn giải đáp, `#ticket` nếu bạn muốn xử lí vấn đề như nạp thẻ, đền bù.",
  },
  {
    n: 6,
    text: "Sử dụng Emoji để lách luật ở điều 1 và 2 cũng tính là vi phạm nội quy.",
  },
];

const serverRules = [
  {
    n: 1,
    text: "Tuyệt đối không sử dụng Hack (kể cả khi bạn chưa dùng).",
  },
  {
    n: 2,
    text: "Phát hiện bug/lỗi hãy báo cáo vào `#forum`, không được lợi dụng để trục lợi.",
  },
  {
    n: 3,
    text: "Sử dụng tài khoản phụ để trục lợi hoặc cạnh tranh không lành mạnh sẽ bị cấm vĩnh viễn cả tài khoản chính và phụ.",
  },
  {
    n: 4,
    text: "Nội quy của mục Trên Discord (trừ điều 4 và 5) cũng được áp dụng trong máy chủ.",
  },
  {
    n: 5,
    text: "Đặt tên tài khoản chứa nội dung công kích đến cá nhân hoặc tập thể sẽ bị cấm vĩnh viễn.",
  },
];

export default function Rules() {
  return (
    <section id="rules" className="border-t border-slate-800/80 bg-mcBg/95">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
        >
          <h2 className="font-sans text-sm font-semibold text-[#ADD8E6] tracking-wide">
            NỘI QUY CHUNG TẠI ASTRALISMC NETWORK
          </h2>
          <p className="mt-1 text-xs text-slate-300 md:text-sm">
            Quy định được áp dụng cho cả Discord và máy chủ để giữ môi trường
            chơi game văn minh.
          </p>
        </motion.div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="panel p-4">
            <h3 className="font-sans text-[11px] font-semibold text-[#ADD8E6] tracking-wide">
              Trên Discord
            </h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-[11px] text-slate-200">
              {discordRules.map((r) => (
                <li key={r.n} className="leading-relaxed">
                  {r.text}
                </li>
              ))}
            </ol>
          </div>

          <div className="panel p-4">
            <h3 className="font-sans text-[11px] font-semibold text-[#ADD8E6] tracking-wide">
              Trong máy chủ
            </h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-[11px] text-slate-200">
              {serverRules.map((r) => (
                <li key={r.n} className="leading-relaxed">
                  {r.text}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="mt-6 text-center text-[11px] text-slate-300">
          Mình rất mong mọi người sẽ tuân thủ tốt và cùng tạo ra một sân chơi
          lành mạnh nhé ♪ 🩷
        </p>
      </div>
    </section>
  );
}
