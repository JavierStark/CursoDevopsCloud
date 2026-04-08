export default function RequirementsSection() {
  return (
    <section id="requirements" className="bg-gray-800 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Entorno de trabajo</h2>
          <p className="text-gray-400">Solo necesitas estas herramientas para seguir la landing y el proyecto</p>
        </div>

        <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-600 bg-gray-800/60 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Entorno</h3>
              <p className="text-gray-300 text-lg">VS Code</p>
            </div>

            <div className="rounded-lg border border-gray-600 bg-gray-800/60 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Terminal</h3>
              <p className="text-gray-300 text-lg">Bash</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
