import TechnologyIcons from './TechnologyIcons';
import GuestSpeaker from './GuestSpeaker';
import { Module } from '@/data/modules';

interface ModuleCardProps {
  module: Module;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  return (
    <div className="bg-gray-700/50 border border-gray-600 rounded-lg overflow-hidden hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
      <div className="bg-blue-600 p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-white">Módulo {module.id}</h3>
          <span className="px-3 py-1 bg-white/20 rounded text-sm text-gray-100">{module.date}</span>
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-xl font-bold text-white mb-3">{module.title}</h4>

        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-2">Tecnologías:</p>
          <div className="flex flex-wrap gap-2">
            <TechnologyIcons technologies={module.technologies} size="sm" />
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-6">{module.description}</p>

        {module.speakers && module.speakers.length > 0 && (
          <div className="mb-6">
            <p className="text-sm text-gray-400 mb-3 font-semibold">Invitado Especial:</p>
            <div className="space-y-2">
              {module.speakers.map((speaker, index) => (
                <GuestSpeaker key={index} speaker={speaker} />
              ))}
            </div>
          </div>
        )}

        <span
          className="inline-block w-full px-6 py-3 rounded font-semibold text-center text-sm bg-gray-800 text-gray-400 border border-gray-700 cursor-not-allowed opacity-80"
          aria-disabled="true"
        >
          Próximamente
        </span>
      </div>
    </div>
  );
}
