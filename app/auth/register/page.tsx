// app/register/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { registerUser } from "@/lib/auth";
import SuccessPopup from "@/components/SuccessPopup";
import Navbar from "@/components/Navbar";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await registerUser(email, password, name);
      setShowSuccess(true);
      
      setTimeout(() => {
        router.push("/dashboard");
      }, 2200);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full mx-4">
          <h1 className="text-3xl font-bold text-center mb-2">Buat Akun Baru</h1>
          <p className="text-center text-gray-500 mb-8">Mulai gunakan RumahOTP sekarang</p>

          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-violet-500"
                placeholder="Bos Besar"
              />
            </div>

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
              {loading ? "Membuat Akun..." : "Daftar Sekarang"}
            </button>
          </form>

          <p className="text-center mt-6 text-sm">
            Sudah punya akun?{" "}
            <Link href="/login" className="text-violet-600 font-medium hover:underline">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>

      <SuccessPopup
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Akun Berhasil Dibuat!"
        message="Selamat datang di RumahOTP. Anda akan diarahkan ke dashboard..."
      />
    </>
  );
}