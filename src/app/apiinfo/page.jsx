"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ApiInfo() {
  const apiInfo = {
    nome: "FakeStoreAPI (v2.1.11)",
    documentacao: "https://fakestoreapi.com/docs",
    email: "support@fakestoreapi.com",
    urlBase: "https://fakestoreapi.com",
    endpoint: "/products",
    atributos: ["id", "title", "price", "description", "category", "image"],
    descricao:
      "A Fake Store API fornece um catálogo completo de produtos com informações como título, preço, descrição, categoria e imagens. É ideal para simular um e-commerce e testar integração com APIs externas.",
    exemploRequisicao: `fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));`,
    exemploResposta: `[
  {
    "id": 0,
    "title": "string",
    "price": 0.1,
    "description": "string",
    "category": "string",
    "image": "http://example.com"
  }
]`,
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 to-rose-200">
      <Header />
      <main className="flex-grow pt-24 p-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
          <h1 className="text-4xl font-extrabold text-rose-700 mb-8 text-center">
            🌟 Conheça Minha API: <span className="text-pink-500">{apiInfo.nome}</span>
          </h1>
          <p className="text-lg text-gray-700 text-center mb-8">
            {apiInfo.descricao}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pink-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-rose-700 mb-4">📧 E-mail de Suporte</h3>
              <p className="text-gray-800">{apiInfo.email}</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-rose-700 mb-4">📄 Documentação Oficial</h3>
              <a
                href={apiInfo.documentacao}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 underline"
              >
                {apiInfo.documentacao}
              </a>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-rose-700 mb-4">🌐 URL Base</h3>
              <p className="text-gray-800">{apiInfo.urlBase}</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-rose-700 mb-4">🔗 Endpoint</h3>
              <p className="text-gray-800">{apiInfo.endpoint}</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg shadow-md md:col-span-2">
              <h3 className="text-xl font-bold text-rose-700 mb-4">📜 Atributos Recebidos</h3>
              <ul className="list-disc pl-6 text-gray-800">
                {apiInfo.atributos.map((atributo, index) => (
                  <li key={index}>{atributo}</li>
                ))}
              </ul>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg shadow-md md:col-span-2">
              <h3 className="text-xl font-bold text-rose-700 mb-4">💻 Exemplo de Requisição</h3>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm text-gray-800 whitespace-pre-wrap">
                {apiInfo.exemploRequisicao}
              </pre>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg shadow-md md:col-span-2">
              <h3 className="text-xl font-bold text-rose-700 mb-4">📥 Exemplo de Resposta</h3>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm text-gray-800 whitespace-pre-wrap">
                {apiInfo.exemploResposta}
              </pre>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}