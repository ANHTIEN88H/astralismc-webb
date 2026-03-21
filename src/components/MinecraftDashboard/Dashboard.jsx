import ServerStatus from "./ServerStatus";
import OnlinePlayers from "./OnlinePlayers";

const styles = {
  wrapper: {
    padding: "2rem",
    background: "#0f172a",
    minHeight: "100vh",
  },
  heading: {
    color: "#4ade80",
    textAlign: "center",
    marginBottom: "2rem",
    fontSize: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
    maxWidth: "1000px",
    margin: "0 auto",
  },
};

export default function Dashboard() {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>⛏️ Minecraft Dashboard</h1>
      <div style={styles.grid}>
        <ServerStatus />
        <OnlinePlayers />
      </div>
    </div>
  );
}
