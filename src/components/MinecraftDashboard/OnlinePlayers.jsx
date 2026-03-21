import { useEffect, useState } from "react";

export default function OnlinePlayers() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/mc/online-players");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setData(await res.json());
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

  if (loading) return <p style={styles.muted}>Đang tải danh sách...</p>;
  if (error) return <p style={styles.error}>❌ {error}</p>;

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>
        👥 Người chơi Online
        <span style={styles.count}>{data.count}</span>
      </h2>

      {data.count === 0 ? (
        <p style={styles.muted}>Không có người chơi nào online.</p>
      ) : (
        <ul style={styles.list}>
          {data.players.map((p) => (
            <li key={p.name} style={styles.item}>
              <img
                src={`https://mc-heads.net/avatar/${encodeURIComponent(p.name)}/32`}
                alt={p.name}
                style={styles.avatar}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div>
                <div style={styles.playerName}>{p.name}</div>
                <div style={styles.playerWorld}>📍 {p.world}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  card: {
    background: "#1e293b",
    border: "1px solid #334155",
    borderRadius: 12,
    padding: "1.5rem",
  },
  title: {
    color: "#94a3b8",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  count: {
    background: "#0f172a",
    color: "#4ade80",
    borderRadius: 999,
    padding: "0.1em 0.6em",
    fontSize: "0.85rem",
    fontWeight: 700,
  },
  list: { listStyle: "none", padding: 0 },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.6rem 0",
    borderBottom: "1px solid #334155",
  },
  avatar: { width: 32, height: 32, borderRadius: 4 },
  playerName: { fontWeight: 600, color: "#f1f5f9" },
  playerWorld: { fontSize: "0.8rem", color: "#64748b", marginTop: 2 },
  muted: { color: "#64748b", fontStyle: "italic" },
  error: { color: "#f87171" },
};
