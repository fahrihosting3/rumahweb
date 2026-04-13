// app/dashboard/page.tsx
"use client";
import { useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import axios from "axios";
import Navbar from "@/components/Navbar";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [balanceData, setBalanceData] = useState<any>(null);
  const [loadingBalance, setLoadingBalance] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const current = getCurrentUser();
    if (!current) {
      router.push("/login");
      return;
    }
    setUser(current);
    fetchBalance();
  }, [router]);

  const fetchBalance = async () => {
    if (!process.env.NEXT_PUBLIC_RUMAHOTP_API_KEY) {
      console.warn("API Key belum diisi di .env.local");
      setLoadingBalance(false);
      return;
    }

    try {
      const res = await axios.get("https://www.rumahotp.io/api/v1/user/balance", {
        headers: {
          "x-apikey": process.env.NEXT_PUBLIC_RUMAHOTP_API_KEY,
          Accept: "application/json",
        },
      });
      setBalanceData(res.data);
    } catch (err) {
      console.error("Gagal mengambil saldo:", err);
    } finally {
      setLoadingBalance(false);
    }
  };

  const handleLogout = () => {
    logoutUser();
    router.push("/");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-10 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h1 className="text-4xl font-bold">Dashboard</h1>
              <p className="text-gray-600 mt-1">Selamat datang kembali, {user?.name}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-3 text-red-600 hover:bg-red-50 rounded-2xl transition"
            >
              Keluar
            </button>
          </div>

          {/* Card Profile & Saldo */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Info Akun */}
            <div className="bg-white rounded-3xl p-8 shadow">
              <h2 className="text-2xl font-semibold mb-6">Informasi Akun</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Nama</p>
                  <p className="font-medium text-lg">{user?.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{user?.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Username</p>
                  <p className="font-mono">{user?.username}</p>
                </div>
              </div>
            </div>

            {/* Saldo RumahOTP */}
            <div className="bg-white rounded-3xl p-8 shadow">
              <h2 className="text-2xl font-semibold mb-6">Saldo RumahOTP</h2>
              
              {loadingBalance ? (
                <div className="py-12 text-center">
                  <div className="animate-spin w-8 h-8 border-4 border-violet-600 border-t-transparent rounded-full mx-auto"></div>
                  <p className="mt-4 text-gray-500">Memuat saldo...</p>
                </div>
              ) : balanceData?.success ? (
                <div>
                  <p className="text-6xl font-bold text-green-600 tracking-tight">
                    {balanceData.data.formated}
                  </p>
                  <p className="text-sm text-gray-500 mt-3">
                    Saldo mentah: {balanceData.data.balance.toLocaleString("id-ID")}
                  </p>
                  <div className="mt-8 pt-6 border-t">
                    <p className="text-sm text-gray-500">Username API</p>
                    <p className="font-medium">{balanceData.data.username}</p>
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center text-red-600">
                  <p>Gagal memuat saldo.</p>
                  <p className="text-sm mt-2">Pastikan API Key sudah benar di .env.local</p>
                </div>
              )}

              <button
                onClick={fetchBalance}
                className="mt-8 w-full py-3 border border-gray-300 hover:bg-gray-50 rounded-2xl transition"
              >
                Refresh Saldo
              </button>
            </div>
          </div>

          {/* Catatan */}
          <div className="mt-12 text-center text-sm text-gray-500">
            Fitur beli nomor, list service, dan real-time SMS akan ditambahkan di tahap berikutnya.
          </div>
        </div>
      </div>
    </>
  );
}