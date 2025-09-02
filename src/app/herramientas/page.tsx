"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Smartphone, Code2, Palette, Layout } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Herramientas() {
  const tools = [
    {
      icon: <Smartphone className="w-10 h-10 text-blue-500" />,
      title: "Frameworks CSS",
      desc: "Tailwind CSS, Bootstrap y Foundation facilitan la creación de diseños adaptables.",
    },
    {
      icon: <Layout className="w-10 h-10 text-green-500" />,
      title: "Grid & Flexbox",
      desc: "Sistemas de rejilla modernos que permiten ajustar la distribución en pantallas móviles y de escritorio.",
    },
    {
      icon: <Code2 className="w-10 h-10 text-purple-500" />,
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
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 mb-10"
      >
        Herramientas Clave
      </motion.h2>

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
