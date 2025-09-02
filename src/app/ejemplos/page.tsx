import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EjemplosResponsive() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-10">
      <motion.h1
        className="text-4xl font-extrabold text-center text-blue-800 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ejemplos de Interfaces Responsive
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Ejemplo Desktop */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="shadow-2xl rounded-2xl overflow-hidden">
            <Image
              src="/ejemplo-desktop.png"
              alt="Ejemplo en desktop"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <CardContent className="p-5 text-center">
              <h2 className="text-xl font-semibold text-blue-700">Versión Desktop</h2>
              <p className="text-gray-600 mt-2">
                Diseños amplios, múltiples columnas y más espacio para contenido.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Ejemplo Tablet */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="shadow-2xl rounded-2xl overflow-hidden">
            <Image
              src="/ejemplo-tablet.png"
              alt="Ejemplo en tablet"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <CardContent className="p-5 text-center">
              <h2 className="text-xl font-semibold text-blue-700">Versión Tablet</h2>
              <p className="text-gray-600 mt-2">
                Se ajustan columnas, tamaños de texto y botones más táctiles.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Ejemplo Mobile */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="shadow-2xl rounded-2xl overflow-hidden">
            <Image
              src="/ejemplo-mobile.png"
              alt="Ejemplo en móvil"
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <CardContent className="p-5 text-center">
              <h2 className="text-xl font-semibold text-blue-700">Versión Móvil</h2>
              <p className="text-gray-600 mt-2">
                Contenido en una sola columna, elementos grandes y fáciles de usar.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
