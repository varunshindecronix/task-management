// app/dashboard/page.tsx

export default function DashboardPage() {
  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Dashboard</h1>

      <div style={cardsWrapper}>
        <div style={cardStyle}>
          <h2 style={cardTitle}>📋 Total Tasks</h2>
          <p style={cardText}>15</p>
        </div>
        <div style={cardStyle}>
          <h2 style={cardTitle}>✅ Completed</h2>
          <p style={cardText}>8</p>
        </div>
        <div style={cardStyle}>
          <h2 style={cardTitle}>🚧 In Progress</h2>
          <p style={cardText}>5</p>
        </div>
        <div style={cardStyle}>
          <h2 style={cardTitle}>🔔 Due Today</h2>
          <p style={cardText}>2</p>
        </div>
      </div>
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  padding: "40px",
  fontFamily: "sans-serif",
  background: "#f9fafb",
  minHeight: "100vh",
};

const headingStyle: React.CSSProperties = {
  fontSize: "32px",
  fontWeight: 700,
  marginBottom: "24px",
};

const cardsWrapper: React.CSSProperties = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
};

const cardStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  flex: "1 1 200px",
  textAlign: "center",
};

const cardTitle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: 600,
  marginBottom: "8px",
};

const cardText: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: 700,
  color: "#2563eb",
};
