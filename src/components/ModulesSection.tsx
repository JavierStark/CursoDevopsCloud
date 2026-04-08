import ModuleCard from './ModuleCard';
import { modules } from '@/data/modules';

export default function ModulesSection() {
  return (
    <section id="program" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Programa del Curso</h2>
          <p className="text-gray-400 text-lg">4 módulos prácticos, 4 semanas, 8 horas totales de aprendizaje hands-on</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </section>
  );
}
