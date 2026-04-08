import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-400">
            DevOps
          </Link>

          <div className="hidden md:flex gap-8">
            <Link href="#program" className="text-gray-300 hover:text-white transition">
              Programa
            </Link>
            <Link href="#requirements" className="text-gray-300 hover:text-white transition">
              Requisitos
            </Link>
            <Link href="#team" className="text-gray-300 hover:text-white transition">
              Equipo
            </Link>
          </div>

          <Link href="/formulario" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition font-semibold">
            Inscribirse
          </Link>
        </div>
      </div>
    </nav>
  );
}
