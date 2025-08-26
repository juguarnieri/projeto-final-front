"use client";

import Link from "next/link";

export default function Perfil() {
  const usuario = {
    nome: "Júlia Andrade Guarnieri",
    email: "juliaguarnieri04@gmail.com",
    telefone: "(19) 98755-1593",
    endereco: "Valinhos, SP",
    bio: "Apaixonada por moda e tecnologia! 💕 Criadora desta linda loja online que utiliza a Fake Store API para demonstrar integração com APIs externas e consumo de dados em tempo real.",
    projeto: "Este projeto foi desenvolvido para demonstrar minhas habilidades em desenvolvimento web utilizando React e Next.js. A aplicação consome dados da Fake Store API (fakestoreapi.com) que fornece um catálogo completo de produtos com informações como título, preço, descrição, categoria e imagens. A API retorna dados em formato JSON através de requisições HTTP GET, permitindo a criação de uma experiência de e-commerce realística.",
    github: "https://github.com/juguarnieri",
    linkedin: "https://linkedin.com/in/juliaguarnieri"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="bg-white text-rose-600 px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            ← Voltar para Loja
          </Link>
          <h1 className="text-4xl font-bold text-rose-800">✨ Sobre a Criadora ✨</h1>
          <Link href="/produtos" className="bg-white text-rose-600 px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            🛍️ Produtos
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-8 text-center">
            <div className="relative inline-block">
              <img 
                src="https://avatars.githubusercontent.com/u/158210661?v=4" 
                alt="Avatar da Júlia" 
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
              <div className="absolute bottom-2 right-2 bg-white text-pink-500 rounded-full p-2 shadow-lg">
                ✨
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mt-4">{usuario.nome}</h2>
            <p className="text-pink-100 mt-2">Desenvolvedora Frontend & UI/UX Designer</p>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Informações da Criadora</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nome Completo</label>
                <div className="bg-pink-50 px-4 py-3 rounded-lg text-gray-800">{usuario.nome}</div>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <div className="bg-pink-50 px-4 py-3 rounded-lg text-gray-800">{usuario.email}</div>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Telefone</label>
                <div className="bg-pink-50 px-4 py-3 rounded-lg text-gray-800">{usuario.telefone}</div>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Localização</label>
                <div className="bg-pink-50 px-4 py-3 rounded-lg text-gray-800">{usuario.endereco}</div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Sobre Mim</label>
                <div className="bg-pink-50 px-4 py-3 rounded-lg text-gray-800">{usuario.bio}</div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Sobre o Projeto & API Utilizada</label>
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 px-4 py-4 rounded-lg text-gray-800 border-l-4 border-pink-400">
                  <p className="mb-3">{usuario.projeto}</p>
                  
                  <div className="bg-gray-50 p-3 rounded-lg mt-3 border">
                    <h5 className="font-semibold text-gray-700 mb-2">🛒 API Fake Store - Endpoint Utilizado:</h5>
                    <div className="bg-gray-800 text-green-400 p-2 rounded font-mono text-sm mb-2">
                      GET https://fakestoreapi.com/products
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Resposta:</strong> Status 200 (Success) | Formato: JSON
                    </p>
                    <div className="text-xs text-gray-500 bg-white p-2 rounded border">
                      <strong>Estrutura dos dados:</strong> id, title, price, description, category, image
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Conecte-se comigo</h4>
              <div className="flex justify-center space-x-4">
                <a 
                  href={usuario.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  💻 GitHub
                </a>
                <a 
                  href={usuario.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  💼 LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Tecnologias Utilizadas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-2xl font-bold text-pink-600">React</div>
                <div className="text-sm text-gray-600">Frontend</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-2xl font-bold text-rose-600">Next.js</div>
                <div className="text-sm text-gray-600">Framework</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-2xl font-bold text-pink-500">API</div>
                <div className="text-sm text-gray-600">Fake Store</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <div className="text-2xl font-bold text-rose-500">2025</div>
                <div className="text-sm text-gray-600">Ano</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}