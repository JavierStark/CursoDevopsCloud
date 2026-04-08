import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">DevOps</h3>
            <p className="text-gray-400 text-sm">
              Mini-curso práctico para estudiantes de Ingeniería Informática
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#program" className="text-gray-400 hover:text-white transition">
                  Programa
                </Link>
              </li>
              <li>
                <Link href="#requirements" className="text-gray-400 hover:text-white transition">
                  Requisitos
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-400 hover:text-white transition">
                  Equipo
                </Link>
              </li>
              <li>
                <Link href="/formulario" className="text-gray-400 hover:text-white transition">
                  Inscribirse
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <p className="text-gray-400 text-sm">LinkedIn y correo en la sección del equipo.</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2026 Mini-Curso DevOps. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Privacidad</a>
              <a href="#" className="hover:text-white transition">Términos</a>
              <a href="#" className="hover:text-white transition">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
