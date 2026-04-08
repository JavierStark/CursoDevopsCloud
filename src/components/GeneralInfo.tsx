import { config } from '@/data/config';

export default function GeneralInfo() {
  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Información General</h2>
          <p className="text-gray-400">Detalles clave del evento</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-8">
            <div className="text-3xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-white mb-3">Público Objetivo</h3>
            <p className="text-gray-300">{config.event.targetAudience}</p>
          </div>

          <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-8">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-white mb-3">Ubicación</h3>
            <p className="text-gray-300">{config.event.location}</p>
          </div>

          <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-8">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">Metodología</h3>
            <p className="text-gray-300">{config.event.methodology}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
