import { config } from '@/data/config';

export default function RequirementsSection() {
  return (
    <section id="requirements" className="bg-gray-800 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Requisitos Técnicos</h2>
          <p className="text-gray-400">Asegúrate de contar con lo necesario antes de asistir</p>
        </div>

        <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">En tu Ordenador:</h3>
              <ul className="space-y-3">
                {config.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold flex-shrink-0">✓</span>
                    <span className="text-gray-300">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-6">Software Recomendado:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold flex-shrink-0">→</span>
                  <span className="text-gray-300">
                    <strong>Editor:</strong> VS Code
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold flex-shrink-0">→</span>
                  <span className="text-gray-300">
                    <strong>Terminal:</strong> Git Bash o bash nativo
                  </span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded">
                <p className="text-sm text-blue-300">
                  <strong>💡 Nota:</strong> Se proporcionará material de apoyo y repositorios starter al inicio de cada sesión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
