export default function Home() {
  const sections = [
    { name: "Experiencia", path: "/experiencia" },
    { name: "Herramientas", path: "/herramientas" },
    { name: "Ventajas", path: "/ventajas" },
    { name: "Buenas prácticas", path: "/buenas" },
    { name: "Ejemplos", path: "/ejemplos" },
    { name: "Conclusión", path: "/conclusion" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 p-8">
      <div className="max-w-4xl text-center bg-white/70 backdrop-blur-md p-12 rounded-2xl shadow-2xl border border-indigo-100 animate-fade-in">
        {/* Imagen */}
        <img 
          src="/portadaWeb.jpg" 
          alt="Equipo de trabajo" 
          className="mx-auto mb-10 w-60 h-80 object-cover animate-float flex items-center p-2"
        />

        {/* Título */}
        <h1 className="text-5xl font-extrabold text-indigo-800 drop-shadow-md mb-4">
          Proyecto Académico
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Una presentación interactiva con diseño elegante y académico.
        </p>

        {/* Botones de navegación */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center mb-8">
          {sections.map((section) => (
            <a
              key={section.path}
              href={section.path}
              className="px-6 py-4 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300 font-semibold text-lg"
            >
              {section.name}
            </a>
          ))}
        </div>
      </div>

      {/* Animación decorativa */}
      <div className="absolute bottom-6 right-6 text-gray-400 animate-bounce">
        ↓
      </div>
    </main>
  );
}