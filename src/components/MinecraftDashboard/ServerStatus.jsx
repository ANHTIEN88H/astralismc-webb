import { useEffect, useState } from 'react';

export default function ServerStatus() {
  const [data, setData]       = useState(null);
  const [error, setError]     = useState(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/mc/status');
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

  if (loading) return <p style={styles.muted}>Đang tải trạng thái...</p>;
  if (error)   return <p style={styles.error}>❌ {error}</p>;

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>🖥️ Trạng thái Server</h2>
      <Row label="Trạng thái"  value={<Badge green>● ONLINE</Badge>} />
      <Row label="Phiên bản"   value={data.version} />
      <Row label="Uptime"      value={data.uptime} />
      <Row label="Người chơi"  value={`${data.online_players} / ${data.max_players}`} />
      <Row
        label="Vault Economy"
        value={
          data.vault_enabled
            ? <Badge green>✔ {data.vault_economy}</Badge>
            : <Badge>✘ Không hoạt động</Badge>
        }
      />
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div style={styles.row}>
      <span style={styles.label}>{label}</span>
      <span style={styles.value}>{value}</span>
    </div>
  );
}

function Badge({ children, green }) {
  const badgeStyle = {
    ...styles.badge,
    ...(green ? styles.badgeGreen : styles.badgeRed),
  };
  return (
    <span style={badgeStyle}>
      {children}
    </span>
  );
}

const styles = {
  card:      { background: '#1e293b', border: '1px solid #334155', borderRadius: 12, padding: '1.5rem' },
  title:     { color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' },
  row:       { display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #0f172a' },
  label:     { color: '#94a3b8' },
  value:     { color: '#f1f5f9', fontWeight: 600 },
  badge:     { padding: '0.2em 0.7em', borderRadius: 999, fontSize: '0.8rem', fontWeight: 700 },
  badgeGreen:{ background: '#166534', color: '#4ade80' },
  badgeRed:  { background: '#7f1d1d', color: '#f87171' },
  muted:     { color: '#64748b' },
  error:     { color: '#f87171' },
};