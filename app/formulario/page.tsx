'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ButtonCTA from '@/components/ButtonCTA';
import Footer from '@/components/Footer';

interface FormData {
  name: string;
  email: string;
  university: string;
  modules: string[];
  message?: string;
}

export default function FormularioPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      modules: [],
    },
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Inscripcion al Evento</h1>
            <p className="text-xl text-gray-300">
              Completa el formulario para reservar tu lugar en el mini-curso de DevOps
            </p>
          </div>

          {submitted && (
            <div className="mb-8 p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-green-400 text-center">
              Inscripcion recibida. Te contactaremos pronto con los detalles finales.
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-700/50 border border-gray-600 rounded-lg p-8 space-y-6"
          >
            <div>
              <label className="block text-white font-semibold mb-2">Nombre Completo *</label>
              <input
                type="text"
                {...register('name', {
                  required: 'El nombre es requerido',
                })}
                className="w-full px-4 py-2 bg-gray-600 border border-gray-500 text-white rounded focus:outline-none focus:border-blue-500 transition"
                placeholder="Tu nombre"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Correo Electronico *</label>
              <input
                type="email"
                {...register('email', {
                  required: 'El correo es requerido',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Ingresa un correo valido',
                  },
                })}
                className="w-full px-4 py-2 bg-gray-600 border border-gray-500 text-white rounded focus:outline-none focus:border-blue-500 transition"
                placeholder="tu@email.com"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Universidad / Institucion *</label>
              <input
                type="text"
                {...register('university', {
                  required: 'Especifica tu institucion',
                })}
                className="w-full px-4 py-2 bg-gray-600 border border-gray-500 text-white rounded focus:outline-none focus:border-blue-500 transition"
                placeholder="ETS Ingenieria Informatica"
              />
              {errors.university && (
                <p className="text-red-400 text-sm mt-1">{errors.university.message}</p>
              )}
            </div>

            <div>
              <label className="block text-white font-semibold mb-4">Modulos (Opcional)</label>
              <div className="space-y-3">
                {[
                  { value: 'docker', label: 'Modulo 1: Docker (22 de abril)' },
                  { value: 'aws', label: 'Modulo 2: AWS y LocalStack (29 de abril)' },
                  { value: 'kubernetes', label: 'Modulo 3: Kubernetes (6 de mayo)' },
                  { value: 'cicd', label: 'Modulo 4: GitHub Actions y Terraform (13 de mayo)' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      value={option.value}
                      {...register('modules')}
                      className="w-5 h-5 rounded bg-gray-600 border border-gray-500 text-blue-600"
                    />
                    <span className="text-gray-300">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Mensaje Adicional (Opcional)</label>
              <textarea
                {...register('message')}
                className="w-full px-4 py-2 bg-gray-600 border border-gray-500 text-white rounded focus:outline-none focus:border-blue-500 transition h-24 resize-none"
                placeholder="Preguntas o comentarios"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-6 py-3 rounded font-semibold transition duration-200"
              >
                {isSubmitting ? 'Enviando...' : 'Inscribirse'}
              </button>
              <ButtonCTA href="/" variant="secondary" className="flex-1">
                Volver
              </ButtonCTA>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
