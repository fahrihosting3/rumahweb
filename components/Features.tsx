// components/Features.tsx
import { Zap, Shield, Clock, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Super Cepat",
      desc: "Dapatkan nomor OTP dalam hitungan detik",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Aman & Private",
      desc: "Nomor fresh, tidak pernah dipakai ulang",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-time SMS",
      desc: "Lihat pesan masuk secara langsung",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "85+ Negara",
      desc: "Dukungan luas termasuk Indonesia, India, USA dll",
    },
  ];

  return (
    <section id="fitur" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Kenapa Memilih RumahOTP?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Platform nomor virtual OTP terbaik untuk kebutuhan verifikasi akun Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white border border-gray-100 hover:border-violet-200 p-8 rounded-3xl transition-all hover:shadow-xl">
              <div className="text-violet-600 mb-6">{f.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}