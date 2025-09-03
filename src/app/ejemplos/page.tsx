"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/button";

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-200 to-stone-400 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-sm p-6 md:p-10 max-w-5xl w-full"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Lado izquierdo: tarjeta con ilustración */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-100 rounded-2xl p-6 flex items-center justify-center relative overflow-hidden"
          >
            <Image
              src="/ejemplo.webp"
              alt="Ilustración"
              width={400}
              height={400}
              className="rounded-2xl object-cover"
            />
          </motion.div>

          {/* Lado derecho: contenido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold text-gray-800">
              Adaptabilidad
            </h1>
            <p className="text-gray-600 text-lg">
              Con Tailwind podemos usar breakpoints (sm, md, lg, xl) para ajustar estilos según el tamaño de pantalla
            </p>

            {/* Botón animado */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 px-6 py-2"
              >
                <Link href="/">← Portada</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="/conclusion" passHref>
                    <Button asChild className="bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 px-6 py-2">
                        <a>Siguiente →</a>
                    </Button>
                </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}

