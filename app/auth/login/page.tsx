// app/login/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loginUser } from "@/lib/auth";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await loginUser(email, password);
      router.push("/dashboard");
    } catch (err: any) {
      alert(err.message || "Login gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full mx-4">
          <h1 className="text-3xl font-bold text-center mb-2">Masuk ke Panel</h1>
          <p className="text-center text-gray-500 mb-8">Selamat datang kembali</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-violet-500"
                placeholder="admin@cindigital.id"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-violet-500"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-2xl transition disabled:opacity-70"
            >
              {loading ? "Sedang masuk..." : "Masuk"}
            </button>
          </form>

          <p className="text-center mt-6 text-sm">
            Belum punya akun?{" "}
            <Link href="/register" className="text-violet-600 font-medium hover:underline">
              Daftar di sini
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}