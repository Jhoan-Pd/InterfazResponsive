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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-50 bg-stone-200 to-stone-400 p-8">
        <div className="max-w-4xl text-center bg-stone-200 to-stone-400 backdrop-blur-md p-12 rounded-2xl shadow-2xl border border-indigo-100 animate-fade-in">
          {/* Imagen */}
          <img 
            src="/portadaWeb.webp" 
            alt="Equipo de trabajo" 
            className="mx-auto mb-15 w-60 h-80 object-cover animate-float -mt-5"
          />

          {/* Título */}
          <div className="max-w-4xl text-center bg-stone-200 p-12 rounded-2xl shadow-2xl border border-indigo-100 animate-fade-in">
              <h1 className="text-5xl font-extrabold text-indigo-800 drop-shadow-md mb-4">
                Diseño Responsive
              </h1>
          </div>

          <h2 className="text-lg text-gray-700 mb-8">
            Integrantes:<br />
            Jhoan Alexander Paredes Delgado<br />
            Edison Andres Montero Garcia<br />
            Diego Alejandro Mallama Yandun<br />
          </h2>

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