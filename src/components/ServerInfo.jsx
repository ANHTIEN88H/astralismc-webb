import { useEffect, useState } from "react";
import { fetchServerStatus } from "../data/serverStatusMock";
import { motion } from "framer-motion";

export default function ServerInfo({ onCopyIp }) {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const serverIp = "astralismc.xyz";

  useEffect(() => {
    let mounted = true;
    fetchServerStatus().then((data) => {
      if (mounted) {
        setStatus(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="info" className="bg-mcBg">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="pixel-title text-sm text-[#ADD8E6]">
              SERVER STATUS
            </h2>
            <p className="mt-1 text-xs text-slate-300 md:text-sm">
              Kiểm tra trạng thái server và thông tin phiên bản.
            </p>
          </div>
          <button
            onClick={() => onCopyIp(serverIp)}
            className="btn-glow text-xs"
          >
            ⛏ Copy IP • {serverIp}
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-[2fr_3fr]">
          <div className="panel p-4">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>Trạng thái</span>
              <span className="text-[11px] text-slate-400">
                Cập nhật giả lập mỗi lần tải trang
              </span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span
                className={`h-3 w-3 rounded-full ${
                  loading
                    ? "bg-yellow-400 animate-pulse"
                    : status?.online
                      ? "bg-emerald-400"
                      : "bg-rose-500"
                }`}
              />
              <span className="text-sm font-medium">
                {loading
                  ? "Đang kiểm tra..."
                  : status?.online
                    ? "ONLINE 24/7"
                    : "OFFLINE"}
              </span>
            </div>

            {!loading && status && (
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-300">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-md bg-slate-900/70 px-3 py-2"
                >
                  <div className="text-[10px] text-slate-400">
                    Người chơi online
                  </div>
                  <div className="mt-1 text-sm text-[#ADD8E6]">
                    {status.playersOnline}/{status.maxPlayers}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className="rounded-md bg-slate-900/70 px-3 py-2"
                >
                  <div className="text-[10px] text-slate-400">
                    Ping ước tính
                  </div>
                  <div className="mt-1 text-sm text-[#ADD8E6]">
                    {status.latency} ms
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="col-span-2 rounded-md bg-slate-900/70 px-3 py-2"
                >
                  <div className="text-[10px] text-slate-400">
                    MOTD &amp; Version
                  </div>
                  <div className="mt-1 text-xs text-slate-200">
                    {status.motd}
                  </div>
                  <div className="mt-1 text-[11px] text-[#ADD8E6]">
                    {status.version}
                  </div>
                </motion.div>
              </div>
            )}
          </div>

          <div className="panel grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
            <div className="rounded-md bg-slate-900/80 p-3 text-xs">
              <div className="text-[10px] text-slate-400">Java IP</div>
              <div className="mt-1 font-mono text-sm text-[#ADD8E6]">
                astralismc.xyz(1.21+)
              </div>
              <div className="mt-1 text-[11px] text-slate-400">
                Phiên bản: 1.21 → 1.21.10
              </div>
            </div>

            <div className="rounded-md bg-slate-900/80 p-3 text-xs">
              <div className="text-[10px] text-slate-400">Bedrock IP</div>
              <div className="mt-1 font-mono text-sm text-[#ADD8E6]">
                {/* Xóa phần "bedrock." để chỉ còn domain */}
                astralismc.xyz(1.21+)
              </div>
              <div className="mt-1 text-[11px] text-slate-400">
                Port: <span className="text-[#ADD8E6]">19132</span>
              </div>
            </div>

            <div className="rounded-md bg-slate-900/80 p-3 text-xs sm:col-span-2">
              <div className="text-[10px] text-slate-400">Lưu ý</div>
              <p className="mt-1 text-[11px] text-slate-300">
                Đây là mock API status phía frontend, dùng để demo UI. Khi có
                API thật, chỉ cần thay thế hàm <code>fetchServerStatus()</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
