// src/app/buenas-practicas/page.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BuenasPracticasPage() {
  const practicas = [
    "Diseño Mobile-First",
    "Uso adecuado de tipografía",
    "Optimización de imágenes",
    "Jerarquía visual clara",
    "Pruebas en múltiples dispositivos",
    "Uso moderado de animaciones",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 via-green-600 to-green-800 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-3xl w-full"
      >
        <h1 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-lg">
          ✅ Buenas Prácticas en Responsive
        </h1>

        <ul className="space-y-4">
          {practicas.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center bg-white/20 hover:bg-white/30 transition rounded-xl p-4 shadow-md"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <CheckCircle className="text-green-300 w-6 h-6 mr-3" />
              <span className="text-white text-lg font-medium">{item}</span>
            </motion.li>
          ))}
        </ul>
        <div className="flex justify-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/" passHref>
                    <Button asChild className="bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 px-6 py-2">
                        <a>← Portada</a>
                    </Button>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/experiencia" passHref>
                    <Button asChild className="bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 px-6 py-2">
                        <a>Siguiente →</a>
                    </Button>
                </Link>
            </motion.div>
        </div>
      </motion.div>
    </div>
    
  );
}
