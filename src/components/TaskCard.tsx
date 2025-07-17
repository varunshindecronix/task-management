"use client";
interface Task {
  id: number;
  title?: string;
  description?: string;
}

export default function TaskCard({ task }: { task: Task }) {
  if (!task) return null;

  return (
    <div
      style={{
        border: "1px solid #E5E7EB",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "#F9FAFB",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      }}
    >
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 600,
          color: "#111827",
          marginBottom: "8px",
        }}
      >
        {task.title || "Untitled Task"}
      </h3>
      <p style={{ color: "#6B7280" }}>{task.description || "No description provided."}</p>
    </div>
  );
}
