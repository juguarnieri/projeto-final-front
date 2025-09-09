"use client";

import { useState, useEffect } from "react";
import { Divider } from "antd";
import { useParams, useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import ProductDescription from "../../components/ProductDescription";
import ProductSpecifications from "../../components/ProductSpecifications";
import NavigationButtons from "../../components/NavigationButtons";
import LoadingState from "../../components/LoadingState";
import ErrorState from "../../components/ErrorState";

export default function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
        setProduct(data);
        setError(false);
        
        // Toast de sucesso
        toast.success("Produto carregado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          style: {
            backgroundColor: "#10b981",
            color: "white",
          },
        });
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
        setProduct(null);
        setError(true);
        
        // Toast de erro
        toast.error("Erro ao carregar o produto. Tente novamente.", {
          position: "top-right",
          autoClose: 4000,
          style: {
            backgroundColor: "#ef4444",
            color: "white",
          },
        });
      } finally {
        setLoading(false);
      }
    };
    
    if (params?.id) {
      fetchProduct();
    }
  }, [params?.id]);

  const handleGoBack = () => {
    router.push("/produtos");
  };

  const handleGoHome = () => {
    router.push("/");
  };

  if (loading) {
    return <LoadingState message="Carregando detalhes do produto..." />;
  }

  if (error || !product) {
    return <ErrorState onGoBack={handleGoBack} onGoHome={handleGoHome} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 to-rose-200">
      <Header />
      
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Botões de Navegação */}
          <NavigationButtons onGoBack={handleGoBack} onGoHome={handleGoHome} />

          {/* Card Principal do Produto */}
          <ProductCard product={product} />

          <Divider />

          {/* Seção da Descrição */}
          <ProductDescription description={product.description} />

          <Divider />

          {/* Especificações Técnicas */}
          <ProductSpecifications product={product} />
        </div>
      </main>
      
      <Footer />
      
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}