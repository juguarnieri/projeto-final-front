"use client";

import axios from "axios";
import { useState } from "react";
import Link from "next/link";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(false);

  const buscarProdutos = async () => {
    setCarregando(true);
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      setProdutos(data);
    } catch (erro) {
      console.error("Erro ao buscar produtos:", erro);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="bg-white text-rose-600 px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            ← Início
          </Link>
          
          <h1 className="text-4xl font-bold text-rose-800">🛍️ Nossos Produtos</h1>
          
          <Link href="/perfil" className="bg-white text-rose-600 px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            👤 Perfil
          </Link>
        </div>

        <div className="text-center mb-8">
          <p className="text-rose-600 mb-6">Descubra produtos incríveis com apenas um clique!</p>
          
          <button 
            onClick={buscarProdutos} 
            disabled={carregando}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            {carregando ? "🔄 Carregando..." : "🛍️ Buscar Produtos"}
          </button>
        </div>
        {produtos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {produtos.map((produto) => (
              <div key={produto.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={produto.image} 
                    alt={produto.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-rose-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    ${produto.price}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="mb-2">
                    <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full font-medium">
                      {produto.category}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 h-12">
                    {produto.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 h-16">
                    {produto.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-rose-600">
                      ${produto.price}
                    </div>
                    <Link href={`/produtos/${produto.id}`}>
                      <button className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                        🛒 Comprar
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {produtos.length === 0 && !carregando && (
          <div className="text-center mt-12">
            <div className="text-6xl mb-4">🛍️</div>
            <p className="text-rose-600 text-lg">Clique no botão acima para ver nossos produtos!</p>
          </div>
        )}
        {carregando && (
          <div className="text-center mt-12">
            <div className="text-6xl mb-4 animate-spin">🔄</div>
            <p className="text-rose-600 text-lg">Carregando produtos...</p>
          </div>
        )}
      </div>
    </div>
  );
}