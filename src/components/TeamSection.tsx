import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from '@/data/team';

export default function TeamSection() {
  return (
    <section id="team" className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Conoce a los Organizadores</h2>
          <p className="text-gray-400 text-lg">
            Estudiantes de 3º de Ingeniería Informática comprometidos con compartir conocimiento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
