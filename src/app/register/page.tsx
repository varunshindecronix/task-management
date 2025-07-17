// app/register/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // Call your backend API here
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/login"); // Redirect to login after success
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>Register</h2>
      <form onSubmit={handleRegister} style={formStyle}>
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  background: "#f3f4f6",
};

const headingStyle: React.CSSProperties = {
  fontSize: "28px",
  marginBottom: "20px",
};

const formStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "300px",
};

const inputStyle: React.CSSProperties = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle: React.CSSProperties = {
  padding: "12px",
  borderRadius: "6px",
  backgroundColor: "#2563eb",
  color: "white",
  fontSize: "16px",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
};
