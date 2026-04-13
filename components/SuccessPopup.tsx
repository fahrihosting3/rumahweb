// components/SuccessPopup.tsx
"use client";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export default function SuccessPopup({ isOpen, onClose, title = "Berhasil!", message = "Akun Anda telah dibuat" }: SuccessPopupProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => onClose(), 2500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/60">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-sm w-full mx-4 text-center animate-in fade-in zoom-in duration-300">
        <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="px-8 py-3 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}