import Link from 'next/link';

interface Guest {
  name: string;
  role: string;
  url?: string;
}

interface GuestSpeakerProps {
  speaker: Guest;
}

export default function GuestSpeaker({ speaker }: GuestSpeakerProps) {
  return (
    <div className="flex items-center gap-4 bg-gray-600/30 p-3 rounded border border-gray-600">
      <div className="w-12 h-12 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-white text-lg font-bold">
        🎤
      </div>
      <div className="flex-1 min-w-0">
        {speaker.url ? (
          <Link
            href={speaker.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white text-sm truncate hover:text-blue-300 transition"
          >
            {speaker.name}
          </Link>
        ) : (
          <p className="font-semibold text-white text-sm truncate">{speaker.name}</p>
        )}
        <p className="text-xs text-gray-400">{speaker.role}</p>
      </div>
    </div>
  );
}
