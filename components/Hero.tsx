"use client";
import { ArrowRight, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="hero-bg text-white pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-3xl text-sm mb-6">
          <Zap className="w-4 h-4" /> OTP Langsung • Harga Grosir
        </div>

        <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
          Nomor Virtual OTP<br />
          <span className="text-yellow-300">Paling Cepat & Termurah</span>
        </h1>

        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
          WhatsApp, Telegram, Instagram, TikTok, Shopee, dll.<br />
          Ribuan nomor siap pakai setiap hari.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => router.push("/register")}
            className="px-10 py-5 bg-white text-violet-700 font-semibold text-lg rounded-3xl hover:scale-105 transition flex items-center gap-3"
          >
            Daftar Sekarang <ArrowRight />
          </button>
          <button
            onClick={() => router.push("/login")}
            className="px-10 py-5 border-2 border-white/80 font-semibold text-lg rounded-3xl hover:bg-white/10 transition"
          >
            Login ke Panel
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
          <div>
            <div className="text-4xl font-bold">1.2jt+</div>
            <div className="text-white/70 text-sm">Saldo aktif hari ini</div>
          </div>
          <div>
            <div className="text-4xl font-bold">487k</div>
            <div className="text-white/70 text-sm">Nomor terjual bulan ini</div>
          </div>
          <div>
            <div className="text-4xl font-bold">4.9s</div>
            <div className="text-white/70 text-sm">Rata-rata dapat OTP</div>
          </div>
        </div>
      </div>
    </section>
  );
}