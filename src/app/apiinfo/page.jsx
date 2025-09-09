"use client";

import Header from "../components/Header"; // Importando o componente Header
import Footer from "../components/Footer"; // Importando o componente Footer

export default function ApiInfo() {
  const apiInfo = {
    nome: "Fake Store API",
    documentacao: "https://fakestoreapi.com/docs",
    urlBase: "https://fakestoreapi.com",
    endpoint: "/products",
    atributos: ["id", "title", "price", "description", "category", "image"],
    descricao:
      "A Fake Store API fornece um catálogo completo de produtos com informações como título, preço, descrição, categoria e imagens. É ideal para simular um e-commerce e testar integração com APIs externas.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200">
      {/* Header */}
      <Header />

      {/* Conteúdo principal */}
      <div className="pt-16 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Informações sobre a API</h2>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Nome da API</label>
              <div className="bg-blue-50 px-4 py-3 rounded-lg text-gray-800">{apiInfo.nome}</div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Documentação Oficial</label>
              <a
                href={apiInfo.documentacao}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-50 px-4 py-3 rounded-lg text-blue-800 underline"
              >
                {apiInfo.documentacao}
              </a>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">URL Base</label>
              <div className="bg-blue-50 px-4 py-3 rounded-lg text-gray-800">{apiInfo.urlBase}</div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Endpoint</label>
              <div className="bg-blue-50 px-4 py-3 rounded-lg text-gray-800">{apiInfo.endpoint}</div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Atributos Recebidos</label>
              <ul className="bg-blue-50 px-4 py-3 rounded-lg text-gray-800 list-disc pl-5">
                {apiInfo.atributos.map((atributo, index) => (
                  <li key={index}>{atributo}</li>
                ))}
              </ul>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Descrição</label>
              <div className="bg-blue-50 px-4 py-3 rounded-lg text-gray-800">{apiInfo.descricao}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}