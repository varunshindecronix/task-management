export function loginUser(email: string) {
  localStorage.setItem("user", JSON.stringify({ email }));
}

export function getUser() {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : null;
}
