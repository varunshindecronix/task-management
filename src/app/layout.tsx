// src/app/layout.tsx
import "../globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Task Manager",
  description: "Manage your company's tasks easily.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
