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
  const cardContent = (
    <>
      <div className="w-12 h-12 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-white text-lg font-bold">
        🎤
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-white text-sm truncate">{speaker.name}</p>
        <p className="text-xs text-gray-400">{speaker.role}</p>
      </div>
    </>
  );

  if (speaker.url) {
    return (
      <Link
        href={speaker.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 bg-gray-600/30 p-3 rounded border border-gray-600 hover:border-blue-500 hover:bg-gray-600/40 transition"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-4 bg-gray-600/30 p-3 rounded border border-gray-600">
      {cardContent}
    </div>
  );
}
