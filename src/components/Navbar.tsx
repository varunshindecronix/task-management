"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = {
    base: {
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: 500,
      color: "#374151", // neutral dark gray
      padding: "8px 12px",
      borderBottom: "2px solid transparent",
      transition: "all 0.3s ease",
    },
    active: {
      color: "#2563EB", // blue-600
      borderBottom: "2px solid #2563EB",
      fontWeight: 600,
    },
  };

  const getLinkStyle = (path: string) => (pathname === path ? { ...linkStyle.base, ...linkStyle.active } : linkStyle.base);

  return (
    <nav
      style={{
        backgroundColor: "#F9FAFB", // light gray background for navbar
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.06)",
        padding: "16px 32px",
        marginBottom: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <span
        style={{
          fontSize: "22px",
          fontWeight: 700,
          color: "#1E40AF", // deep blue (modern, elegant)
        }}
      >
        📝 Task Manager
      </span>
      <div style={{ display: "flex", gap: "24px" }}>
        <Link href="/" style={getLinkStyle("/")}>
          Home
        </Link>
        <Link href="/tasks" style={getLinkStyle("/tasks")}>
          Tasks
        </Link>
        <Link href="/login" style={getLinkStyle("/login")}>
          Login
        </Link>
      </div>
    </nav>
  );
}
