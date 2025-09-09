"use client";

import Link from "next/link";
import Banner from "../app/components/Banner";
import Footer from "../app/components/Footer";
import Header from "../app/components/Header";

export default function Page() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">

      <Header />

      <Banner
        title="Bem-vinda à Babi's Store"
        subtitle="Descubra produtos incríveis e conheça mais sobre nossa criadora."
        imageUrl="./images/banner.png"
      />


      <main className="flex-grow pt-12">
        <div className="container mx-auto px-6 text-center">
          
          <div className="mb-12">
            <div className="max-w-2xl mx-auto">
              <img
                src="./images/showcase.png" 
                alt="Produtos em destaque"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="mt-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Produtos Exclusivos
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Descubra nossa coleção cuidadosamente selecionada com os melhores produtos para você. 
                  Qualidade, estilo e preços que cabem no seu bolso!
                </p>
              </div>
            </div>
          </div>

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


      <Footer />
    </div>
  );
}