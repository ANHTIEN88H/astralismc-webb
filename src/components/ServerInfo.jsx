import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };
const delay1 = { delay: 0.05 };
const delay2 = { delay: 0.1 };

async function fetchRealStatus() {
  const res = await fetch("/api/mc/status");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function fetchRealPlayers() {
  const res = await fetch("/api/mc/online-players");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export default function ServerInfo({ onCopyIp }) {
  const [status, setStatus] = useState(null);
  const [players, setPlayers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const serverIp = "astralismc.xyz";

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const [s, p] = await Promise.all([fetchRealStatus(), fetchRealPlayers()]);
      setStatus(s);
      setPlayers(p);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    const interval = setInterval(load, 30000);
    return () => clearInterval(interval);
  }, []);

  const isOnline = !error && status !== null;

  return (
    <section id="info">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="final-fix-title">SERVER STATUS</h2>
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
          {/* Cột trái: Trạng thái */}
          <div className="panel p-4">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>Trạng thái</span>
              <span className="text-[11px] text-slate-400">
                Tự động cập nhật mỗi 30 giây
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span
                className={`h-3 w-3 rounded-full ${
                  loading
                    ? "bg-yellow-400 animate-pulse"
                    : isOnline
                      ? "bg-emerald-400"
                      : "bg-rose-500"
                }`}
              />
              <span className="text-sm font-medium">
                {loading
                  ? "Đang kiểm tra..."
                  : isOnline
                    ? "ONLINE 24/7"
                    : "OFFLINE"}
              </span>
            </div>

            {error && <p className="mt-3 text-xs text-rose-400">❌ {error}</p>}

            {!loading && status && (
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-300">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  className="rounded-md bg-slate-900/70 px-3 py-2"
                >
                  <div className="text-[10px] text-slate-400">
                    Người chơi online
                  </div>
                  <div className="mt-1 text-sm text-[#ADD8E6]">
                    {status.online_players}/{status.max_players}
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  transition={delay1}
                  className="rounded-md bg-slate-900/70 px-3 py-2"
                >
                  <div className="text-[10px] text-slate-400">Uptime</div>
                  <div className="mt-1 text-sm text-[#ADD8E6]">
                    {status.uptime}
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  transition={delay2}
                  className="col-span-2 rounded-md bg-slate-900/70 px-3 py-2"
                >
                  <div className="text-[10px] text-slate-400">Phiên bản</div>
                  <div className="mt-1 text-[11px] text-[#ADD8E6]">
                    {status.version}
                  </div>
                  <div className="mt-1 text-[10px] text-slate-400">
                    Vault Economy:{" "}
                    <span
                      className={
                        status.vault_enabled
                          ? "text-emerald-400"
                          : "text-rose-400"
                      }
                    >
                      {status.vault_enabled
                        ? `✔ ${status.vault_economy}`
                        : "✘ Không hoạt động"}
                    </span>
                  </div>
                </motion.div>
              </div>
            )}
          </div>

          {/* Cột phải: IP + Danh sách người chơi */}
          <div className="panel grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
            <div className="rounded-md bg-slate-900/80 p-3 text-xs">
              <div className="text-[10px] text-slate-400">Java IP</div>
              <div className="mt-1 font-mono text-sm text-[#ADD8E6]">
                astralismc.xyz (1.21+)
              </div>
              <div className="mt-1 text-[11px] text-slate-400">
                Phiên bản: 1.21 → 1.21.10
              </div>
            </div>

            <div className="rounded-md bg-slate-900/80 p-3 text-xs">
              <div className="text-[10px] text-slate-400">Bedrock IP</div>
              <div className="mt-1 font-mono text-sm text-[#ADD8E6]">
                astralismc.xyz (1.21+)
              </div>
              <div className="mt-1 text-[11px] text-slate-400">
                Port: <span className="text-[#ADD8E6]">19132</span>
              </div>
            </div>

            <div className="rounded-md bg-slate-900/80 p-3 text-xs sm:col-span-2">
              <div className="text-[10px] text-slate-400 mb-2">
                👥 Người chơi đang online
              </div>
              {loading && <p className="text-slate-500 italic">Đang tải...</p>}
              {!loading && players?.count === 0 && (
                <p className="text-slate-500 italic">
                  Không có người chơi nào online.
                </p>
              )}
              {!loading && players?.players?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {players.players.map((p) => (
                    <div
                      key={p.name}
                      className="flex items-center gap-1.5 rounded bg-slate-800 px-2 py-1"
                    >
                      <img
                        src={`https://mc-heads.net/avatar/${encodeURIComponent(p.name)}/16`}
                        alt={p.name}
                        className="h-4 w-4 rounded-sm"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      <span className="text-slate-200">{p.name}</span>
                      <span className="text-slate-500">• {p.world}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
