"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("loggedIn", "true");
      router.push("/dashboard");
    } else {
      alert("Invalid credentials Please try again");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, black, #18181b, black)",
      }}
    >
      <div
        style={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          padding: "2rem",
          borderRadius: "1rem",
          width: "100%",
          maxWidth: "24rem",
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
          }}
        >
          <button
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "none",
              cursor: "pointer",
            }}
          >
            Sign in
          </button>
          <button
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              color: "#a1a1aa",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "white")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#a1a1aa")}
          >
            Sign up
          </button>
        </div>

        <h2
          style={{
            color: "white",
            fontSize: "1.25rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          Sign in to your account
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "1rem",
            borderRadius: "0.375rem",
            backgroundColor: "#18181b",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "white",
            outline: "none",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "1.5rem",
            borderRadius: "0.375rem",
            backgroundColor: "#18181b",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "white",
            outline: "none",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "0.375rem",
            background: "linear-gradient(to right, #ec4899, #ef4444)",
            color: "white",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            transition: "opacity 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Login
        </button>

        <p
          style={{
            fontSize: "0.75rem",
            color: "#a1a1aa",
            marginTop: "1.5rem",
            textAlign: "center",
          }}
        >
          By logging in, you agree to our{" "}
          <span
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Terms & Service
          </span>
        </p>
      </div>
    </div>
  );
}
