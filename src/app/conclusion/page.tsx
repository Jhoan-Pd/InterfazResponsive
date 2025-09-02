import { motion } from "framer-motion";

export default function Conclusiones() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500 p-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-10"
      >
        <h2 className="text-4xl font-bold text-purple-700 mb-6 text-center">
          Conclusiones
        </h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="flex items-start">
            <span className="text-purple-600 font-bold mr-2">✔</span>
            Las interfaces responsive son esenciales para garantizar accesibilidad y usabilidad en cualquier dispositivo.
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 font-bold mr-2">✔</span>
            Mejoran la experiencia del usuario al adaptar el contenido de forma dinámica.
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 font-bold mr-2">✔</span>
            Representan una práctica moderna y eficiente en el diseño web actual.
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 font-bold mr-2">✔</span>
            Contribuyen al posicionamiento SEO y al alcance de un público más amplio.
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
