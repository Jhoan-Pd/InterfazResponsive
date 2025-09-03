// src/app/ventajas/page.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle, Smartphone, Monitor, Zap } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/button";


export default function Ventajas() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 bg-stone-200 to-stone-400 p-10">
      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-blue-700 mb-12 text-center drop-shadow-lg"
      >
        Ventajas de una Interfaz Responsive
      </motion.h1>

      {/* Ventajas en tarjetas */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl ">
        {[
          {
            icon: <Smartphone className="w-12 h-12 text-blue-600 " />,
            title: "Adaptabilidad",
            desc: "La capacidad del diseño responsive de ajustarse automáticamente a cualquier tamaño de pantalla (móvil, tablet, escritorio, TV).",
          },
          {
            icon: <Monitor className="w-12 h-12 text-green-600" />,
            title: "Experiencia Consistente",
            desc: "El usuario recibe la misma calidad de experiencia sin importar el dispositivo",
          },
          {
            icon: <Zap className="w-12 h-12 text-yellow-500" />,
            title: "Eficiencia",
            desc: "El diseño responsive reduce tiempo y esfuerzo en el desarrollo y mantenimiento.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
          >
            {item.icon}
            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              {item.title}
            </h2>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
       <div className="flex justify-center gap-4 mt-12">
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/" passHref>
                    <Button asChild className="bg-stone-500 text-white rounded-xl shadow-lg hover:bg-indigo-700 px-6 py-2">
                        <a>← Portada</a>
                    </Button>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/buenas" passHref>
                    <Button asChild className="bg-stone-500 text-white rounded-xl shadow-lg hover:bg-purple-700 px-6 py-2">
                        <a>Siguiente →</a>
                    </Button>
                </Link>
            </motion.div>
        </div>
    </div>
  );
}
