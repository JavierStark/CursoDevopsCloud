import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini-Curso DevOps - ETS Ingeniería Informática",
  description:
    "Aprende DevOps en 4 sesiones prácticas. Docker, AWS, Kubernetes y CI/CD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col bg-gray-900 text-gray-100`}>
        <Navigation />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
