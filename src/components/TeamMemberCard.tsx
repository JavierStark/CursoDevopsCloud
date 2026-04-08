import { TeamMember } from '@/data/team';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-gray-700/50 border border-gray-600 rounded-lg overflow-hidden hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
      <div className="w-full h-64 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
        <div className="text-4xl">👤</div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-sm text-gray-400 mb-4">{member.year}</p>

        <div className="mb-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Perfil</p>
          <p className="text-gray-300 font-semibold text-sm">{member.profile}</p>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed mb-6">{member.bio}</p>

        <div className="flex gap-3">
          {member.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-600 hover:bg-blue-600 text-white rounded transition text-sm font-semibold"
              title={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
