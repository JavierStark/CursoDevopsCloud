import Footer from '@/components/Footer';
import { config } from '@/data/config';

export default function FormularioPage() {
  return (
    <>
      <section className="min-h-screen bg-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-white mb-4">Inscripcion al Evento</h1>
            <p className="text-xl text-gray-300">Completa el formulario oficial de Google para reservar tu plaza.</p>
          </div>

          <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-3 sm:p-4">
            <iframe
              src={config.googleFormEmbedUrl}
              title="Formulario de inscripcion"
              className="w-full h-[1100px] rounded"
              loading="lazy"
            >
              Cargando formulario...
            </iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
