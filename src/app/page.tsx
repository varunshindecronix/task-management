"use client";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        background: "linear-gradient(to bottom, #f9fafb, #ffffff)",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          fontWeight: 700,
          color: "#111827",
          marginBottom: "16px",
        }}
      >
        Welcome to Task Manager
      </h1>
      <p
        style={{
          fontSize: "18px",
          color: "#4B5563",
          marginBottom: "40px",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Organize, prioritize, and track your tasks effortlessly. Start managing your productivity today.
      </p>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginBottom: "60px" }}>
        <a
          href="/login"
          style={{
            padding: "12px 24px",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            fontWeight: 600,
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Login
        </a>
        <a
          href="/register"
          style={{
            padding: "12px 24px",
            backgroundColor: "#e5e7eb",
            color: "#1f2937",
            fontWeight: 600,
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Register
        </a>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "24px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
          }}
        >
          <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "10px", color: "#111827" }}>📝 Create Tasks</h3>
          <p style={{ color: "#6B7280" }}>Quickly add and manage tasks to stay organized and focused.</p>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "24px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
          }}
        >
          <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "10px", color: "#111827" }}>📊 Track Progress</h3>
          <p style={{ color: "#6B7280" }}>Easily mark tasks as done and monitor your productivity.</p>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            padding: "24px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
          }}
        >
          <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "10px", color: "#111827" }}>🌙 Dark Mode</h3>
          <p style={{ color: "#6B7280" }}>Enjoy a clean interface with full dark mode support.</p>
        </div>
      </div>
    </div>
  );
}
