"use client";

import { Button } from "antd";
import { HomeOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 to-rose-200">
      <Header />
      
      <main className="flex-grow flex items-center justify-center px-4 py-16 mt-16">
        <div className="text-center bg-white rounded-3xl shadow-2xl p-12 max-w-2xl mx-auto">
          {/* Emoji e Título */}
          <div className="mb-8">
            <div className="text-9xl mb-6 animate-bounce">😢</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Página não encontrada
            </h1>
            <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full"></div>
          </div>

          {/* Mensagem explicativa */}
          <div className="mb-10">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Oops! Parece que você se perdeu em nosso site.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              A página que você está procurando não existe ou foi movida para outro local.
            </p>
            <p className="text-rose-600 font-medium text-lg">
              Não se preocupe, vamos te ajudar a encontrar o caminho de volta! ✨
            </p>
          </div>

          {/* Botões de navegação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              type="primary"
              size="large"
              icon={<HomeOutlined />}
              onClick={handleGoHome}
              className="bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 h-12 px-8 text-lg font-medium"
            >
              Voltar ao Início
            </Button>
            
            <Button
              size="large"
              icon={<ArrowLeftOutlined />}
              onClick={handleGoBack}
              className="bg-rose-400 hover:bg-rose-500 text-white border-rose-400 hover:border-rose-500 h-12 px-8 text-lg font-medium"
            >
              Voltar à Página Anterior
            </Button>
          </div>

          {/* Informações adicionais */}
          <div className="mt-10 p-6 bg-rose-50 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              🛍️ Sugestões para você:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="text-rose-500 mr-2">•</span>
                Visite nossa página de produtos
              </div>
              <div className="flex items-center">
                <span className="text-rose-500 mr-2">•</span>
                Confira nossas ofertas especiais
              </div>
              <div className="flex items-center">
                <span className="text-rose-500 mr-2">•</span>
                Use a barra de pesquisa
              </div>
              <div className="flex items-center">
                <span className="text-rose-500 mr-2">•</span>
                Entre em contato conosco
              </div>
            </div>
          </div>

          {/* Código de erro */}
          <div className="mt-8 text-gray-400 text-sm">
            Erro 404 - Página não encontrada
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}