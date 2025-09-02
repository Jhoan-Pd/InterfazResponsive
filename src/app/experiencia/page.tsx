"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ExperienciaPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl text-center"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-indigo-700 mb-6"
        >
          Nuestra Experiencia
        </motion.h1>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="mb-6 flex justify-center"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Experiencia"
            width={150}
            height={150}
            className="rounded-full shadow-lg"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-gray-700 leading-relaxed mb-8"
        >
          Contamos con una amplia trayectoria en el desarrollo de proyectos
          académicos y profesionales, aplicando innovación, creatividad y un
          enfoque colaborativo para generar resultados de impacto.
        </motion.p>

        {/* Botones de navegación */}
        <div className="flex justify-center gap-4">
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/" passHref>
                    <Button asChild className="bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 px-6 py-2">
                        <a>← Portada</a>
                    </Button>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/herramientas" passHref>
                    <Button asChild className="bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 px-6 py-2">
                        <a>Siguiente →</a>
                    </Button>
                </Link>
            </motion.div>
        </div>
      </motion.div>
    </main>
  );
}