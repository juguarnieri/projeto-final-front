"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Perfil() {
  const usuario = {
    turma: "Turma A - Desenvolvimento Web",
    escola: "Escola Técnica Estadual",
    nome: "Júlia Andrade Guarnieri",
    frase: "A criatividade é a inteligência se divertindo. - Albert Einstein",
    avatar: "/images/avatar.png",
    bio: "Apaixonada por moda e tecnologia! 💕 Criadora desta linda loja online que utiliza a Fake Store API para demonstrar integração com APIs externas e consumo de dados em tempo real.",
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 to-rose-200">
      <Header />
      <main className="flex-grow pt-24 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-8 text-center">
              <div className="relative inline-block">
                <Image
                  src={usuario.avatar}
                  alt="Avatar da Júlia"
                  width={128}
                  height={128}
                  className="rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <h2 className="text-3xl font-bold text-white mt-4">{usuario.nome}</h2>
              <p className="text-pink-100 mt-2">{usuario.frase}</p>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Informações Pessoais</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Turma</label>
                  <div className="bg-pink-50 px-4 py-3 rounded-lg text-gray-800">{usuario.turma}</div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Escola</label>
                  <div className="bg-pink-50 px-4 py-3 rounded-lg text-gray-800">{usuario.escola}</div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">Sobre Mim</label>
                  <div className="bg-pink-50 px-4 py-3 rounded-lg text-gray-800">{usuario.bio}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}