// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-9 h-9 bg-violet-600 rounded-2xl flex items-center justify-center text-2xl">🔥</div>
          <span className="font-bold text-3xl">RumahOTP</span>
        </div>
        <p className="text-gray-400">Nomor Virtual OTP Termurah & Tercepat di Indonesia</p>
        <p className="text-xs text-gray-500 mt-8">
          © 2026 RumahOTP Panel. Demo Project untuk Next.js + Vercel
        </p>
      </div>
    </footer>
  );
}