"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Produtos from "../components/Produtos";
import SearchBar from "../components/SearchBar";
import ScrollToTop from "../components/ScrollToTop";

export default function PaginaProdutos() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleDetalhes = (produto) => {
    // Navegar para a página de detalhes do produto
    router.push(`/produtos/${produto.id}`);
    
    // Opcional: Mostrar toast de confirmação
    toast.info(`🔍 Carregando detalhes de: ${produto.title}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#f43f5e",
        color: "white",
      },
      progressStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
      },
    });
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 to-rose-200">
      <Header />
      <main className="flex-grow">
        <Banner
          title="Bem-vindo à nossa loja!"
          subtitle="Os melhores produtos com qualidade e preço justo."
          imageUrl="./images/banner.png"
        />
        
        <div className="text-center mt-8">
          <p className="text-rose-600 text-lg">
            Bem-vindo à nossa loja! Aqui você encontra os melhores produtos com qualidade e preço justo. Explore nossas categorias e aproveite as ofertas!
          </p>
        </div>

        <SearchBar onSearch={handleSearch} />
        
        <Produtos onDetalhes={handleDetalhes} searchTerm={searchTerm} />
        
        <ScrollToTop />
      </main>
      
      <Footer />
      <ToastContainer
        toastStyle={{
          backgroundColor: "#f43f5e",
          color: "white",
        }}
      />
    </div>
  );
}