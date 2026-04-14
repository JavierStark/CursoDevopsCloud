import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "CursoDevopsCloud";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repo}` : "";
const siteUrl = isProd ? `https://cursodevoopscloud.github.io${basePath}` : "http://localhost:3000";

export const metadata: Metadata = {
  title: 'Mini-Curso DevOps - ETS Ingeniería Informática',
  description:
    'Aprende DevOps en 4 sesiones prácticas. Docker, AWS, Kubernetes y CI/CD. Inscríbete ahora para estudiantes de Ingeniería Informática.',
  keywords:
    'DevOps, Docker, Kubernetes, AWS, CI/CD, GitHub Actions, Terraform, Curso',
  authors: [
    { name: 'Javier Torralbo Cortés' },
    { name: 'Alejandro Cerezo' },
  ],
  robots: 'index, follow',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    title: 'Mini-Curso DevOps - ETS Ingeniería Informática',
    description:
      'Aprende DevOps en 4 sesiones prácticas. Docker, AWS, Kubernetes y CI/CD.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini-Curso DevOps',
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#111827" />
      </head>
      <body
        className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
