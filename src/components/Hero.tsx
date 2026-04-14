import Link from 'next/link';
import { config } from '@/data/config';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-square bg-blue-600 rounded-lg shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-2">🚀 Curso de DevOps y Cloud</h3>
                <p className="text-gray-100 text-sm">Imagen Promocional del Evento</p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Curso de DevOps y Cloud en 4 sesiones prácticas
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Aprende Docker, AWS, Kubernetes e Infraestructura como Código con una metodología hands-on.
              Cada sesión combina un taller guiado con una visión profesional aportada por invitados de la industria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href={config.registrationPath}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold text-center transition"
              >
                ¡Inscríbete al Evento! →
              </Link>
              <a href="#program" className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded font-semibold text-center transition border border-gray-600">
                Ver Programa
              </a>
            </div>

            <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-blue-400">📅 Próximas sesiones:</strong> 22 de abril a 13 de mayo • Sala de Grados C ETS Ingeniería Informática
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
