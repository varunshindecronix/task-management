"use client";
import { useEffect, useState } from "react";
import TaskCard from "@/components/TaskCard";

interface Task {
  id: number;
  title: string;
  status: "pending" | "done";
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch("/api/tasks");
        const data = await response.json();
        setTasks(data.tasks || []);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "16px" }}>All Tasks</h2>

      {loading ? (
        <p style={{ color: "#6B7280" }}>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p style={{ color: "#6B7280" }}>No tasks found.</p>
      ) : (
        <div style={{ display: "grid", gap: "16px" }}>
          {tasks.filter(Boolean).map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}
