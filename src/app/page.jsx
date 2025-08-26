"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-200 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-4xl animate-bounce delay-100">🌸</div>
        <div className="absolute top-20 right-20 text-3xl animate-bounce delay-300">💖</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-bounce delay-500">✨</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-bounce delay-700">🛍️</div>
        <div className="absolute top-1/2 left-5 text-2xl animate-pulse">💕</div>
        <div className="absolute top-1/3 right-5 text-2xl animate-pulse delay-1000">🌺</div>
      </div>
      
      <div className="text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
            ✨ Babi's Store ✨
          </h1>
          <div className="text-2xl animate-bounce text-rose-600 font-semibold">
            🌟 A LOJA MAIS INCRÍVEL DO MUNDO! 🌟
          </div>
        </div>
        
        <p className="text-rose-600 text-2xl mb-12 font-medium animate-fade-in">
          💝 Bem-vinda à sua loja favorita! 💝
        </p>
        <div className="space-y-8">
          <Link 
            href="/produtos" 
            className="group block bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700 text-white px-16 py-6 rounded-full font-bold text-2xl shadow-2xl transform hover:scale-110 transition-all duration-500 animate-pulse hover:animate-none border-4 border-white/30"
          >
            <span className="block group-hover:animate-bounce">
              🛍️ EXPLORAR PRODUTOS INCRÍVEIS! 🛍️
            </span>
          </Link>
          
          <Link 
            href="/perfil" 
            className="group block bg-white text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 px-16 py-6 rounded-full font-bold text-2xl shadow-2xl hover:shadow-pink-300/50 transition-all duration-500 transform hover:scale-110 border-4 border-gradient-to-r from-pink-300 to-rose-300 hover:border-pink-400"
            style={{
              background: 'white',
              color: '#e11d48',
              border: '4px solid #fbb6ce'
            }}
          >
            <span className="block group-hover:animate-bounce">
              👤 CONHECER A CRIADORA! 👤
            </span>
          </Link>
        </div>
      
        <div className="mt-16 animate-bounce">
          <div className="text-9xl mb-6 animate-spin-slow">🌸</div>
          <p className="text-rose-600 text-xl font-bold animate-pulse">
            ⭐ ESCOLHA UMA OPÇÃO E COMECE A DIVERSÃO! ⭐
          </p>
          <div className="mt-4 text-4xl animate-bounce delay-500">⬆️</div>
        </div>
      </div>
    </div>
  );
}