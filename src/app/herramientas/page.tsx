"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Smartphone, Code2, Palette, Layout } from "lucide-react";
import Link from "next/link";
import  Button  from "@/components/ui/button";

export default function Herramientas() {
  const tools = [
    {
      icon: <Smartphone className="w-10 h-18 text-blue-500" />,
      title: "Frameworks CSS",
      desc: "Tailwind CSS, Bootstrap y Foundation facilitan la creación de diseños adaptables.",
    },
    {
      icon: <Layout className="w-10 h-18 text-green-500" />,
      title: "Grid & Flexbox",
      desc: "Sistemas de rejilla modernos que permiten ajustar la distribución en pantallas móviles y de escritorio.",
    },
    {
      icon: <Code2 className="w-10 h-18 text-purple-500" />,
      title: "Media Queries",
      desc: "CSS utiliza media queries para adaptar el diseño a diferentes resoluciones de dispositivos.",
    },
    {
      icon: <Palette className="w-10 h-10 text-pink-500" />,
      title: "Herramientas de Diseño",
      desc: "Figma, Adobe XD y Sketch permiten prototipar interfaces responsive antes del desarrollo.",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b bg-stone-200 to-stone-400 p-6">
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-10"
      >
        Herramientas Clave
      </motion.h2>

      {/* Botones */}
      <div className="flex justify-center gap-4 mb-10">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/" passHref>
            <Button asChild className="bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 px-6 py-2">
              <a>← Portada</a>
            </Button>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/ventajas" passHref>
            <Button asChild className="bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 px-6 py-2">
              <a>Siguiente →</a>
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Grid con 4 herramientas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center text-center p-6">
                {tool.icon}
                <h3 className="text-xl font-semibold text-gray-700 mt-4">
                  {tool.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{tool.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
