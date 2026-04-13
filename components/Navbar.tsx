// components/Navbar.tsx
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "@/lib/auth";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    router.push("/");
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-violet-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">🔥</div>
          <span className="font-bold text-2xl tracking-tight">RumahOTP</span>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-violet-600 transition">Beranda</Link>
          <Link href="/#fitur" className="hover:text-violet-600 transition">Fitur</Link>

          {user ? (
            <>
              <Link href="/dashboard" className="hover:text-violet-600 transition">Dashboard</Link>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Halo, <strong>{user.name}</strong></span>
                <button
                  onClick={handleLogout}
                  className="px-5 py-2 text-red-600 hover:bg-red-50 rounded-2xl transition"
                >
                  Keluar
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => router.push("/login")}
                className="px-6 py-2.5 border border-violet-600 text-violet-600 hover:bg-violet-50 rounded-2xl transition"
              >
                Masuk
              </button>
              <button
                onClick={() => router.push("/register")}
                className="px-6 py-2.5 bg-violet-600 text-white hover:bg-violet-700 rounded-2xl transition"
              >
                Daftar Gratis
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}