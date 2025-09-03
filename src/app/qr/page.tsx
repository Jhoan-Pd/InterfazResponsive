"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import Image from "next/image";

export default function QrPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-3xl text-center"
      >
        {/* Título */}
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-indigo-700 mb-6"
        >
          Prueba de Interfaz Responsive
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-700 mb-8"
        >
          Escanea este código QR con tu dispositivo móvil y comprueba cómo se adapta 
          la interfaz de manera automática en diferentes pantallas.
        </motion.p>

        {/* Imagen QR */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
        >
          <Image
            src="/Qr.png"
            alt="Qr"
            width={400}
            height={400}
            className="rounded-2xl object-cover flex items-center justify-center mx-auto"
          />
        </motion.div>
      </motion.div>
    </main>
  );
}
        