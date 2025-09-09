"use client";

import Link from "next/link";
import Banner from "../app/components/Banner";
import Footer from "../app/components/Footer";
import Header from "../app/components/Header"; // Importando o componente Header

export default function Page() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner
        title="Bem-vinda à Babi's Store"
        subtitle="Descubra produtos incríveis e conheça mais sobre nossa criadora."
        imageUrl="./images/banner.png" // Caminho relativo para a imagem
      />

      {/* Main Content */}
      <main className="flex-grow pt-12">
        <div className="container mx-auto px-6 text-center">
          <div className="space-y-6 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-center">
            <Link
              href="/produtos"
              className="bg-pink-500 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-md hover:bg-pink-600 transition"
            >
              Explorar Produtos
            </Link>
            <Link
              href="/perfil"
              className="bg-gray-100 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-200 transition"
            >
              Conhecer a Criadora
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}