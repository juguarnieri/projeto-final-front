"use client";

import { useState, useEffect } from "react";
import { Button, Spin, Rate, Divider } from "antd";
import { ArrowLeftOutlined, ShoppingCartOutlined, CreditCardOutlined, TagOutlined } from "@ant-design/icons";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
        setProduct(data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
        setProduct(null);
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

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 to-rose-200">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <Spin size="large" />
            <p className="text-rose-600 text-lg mt-4">Carregando detalhes do produto...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 to-rose-200">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center bg-white rounded-2xl shadow-xl p-8">
            <div className="text-6xl mb-4">😔</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Produto não encontrado</h2>
            <p className="text-gray-600 mb-6">O produto solicitado não existe ou foi removido.</p>
            <Button 
              type="primary"
              icon={<ArrowLeftOutlined />}
              onClick={handleGoBack}
              className="bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600"
              size="large"
            >
              Voltar aos Produtos
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 to-rose-200">
      <Header />
      
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">

          <div className="mt-12 mb-8">
            <Button 
              icon={<ArrowLeftOutlined />}
              onClick={handleGoBack}
              className="bg-rose-500 hover:bg-rose-600 text-white border-rose-500 hover:border-rose-600"
              size="large"
            >
              Voltar aos Produtos
            </Button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

              <div className="bg-gray-50 p-8 flex items-center justify-center">
                <div className="max-w-md">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-96 object-contain rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-6">
                  <div>
                    <span className="inline-flex items-center bg-pink-100 text-pink-800 text-sm px-4 py-2 rounded-full font-medium">
                      <TagOutlined className="mr-2" />
                      {product.category}
                    </span>
                  </div>

                  <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                    {product.title}
                  </h1>

                  {product.rating && (
                    <div className="flex items-center space-x-4">
                      <Rate 
                        disabled 
                        value={product.rating.rate} 
                        allowHalf 
                        className="text-yellow-500"
                      />
                      <span className="text-gray-600">
                        {product.rating.rate} ({product.rating.count} avaliações)
                      </span>
                    </div>
                  )}

                  {/* Preço */}
                  <div className="bg-rose-50 p-6 rounded-xl">
                    <div className="text-4xl font-bold text-rose-600 mb-2">
                      ${product.price}
                    </div>
                    <div className="text-sm text-gray-600">
                      Preço à vista no cartão de crédito
                    </div>
                  </div>

                  {/* Botões de Ação */}
                  <div className="space-y-3">
                    <Button
                      type="primary"
                      size="large"
                      icon={<ShoppingCartOutlined />}
                      className="w-full bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 h-12"
                    >
                      Adicionar ao Carrinho
                    </Button>
                    <Button
                      size="large"
                      icon={<CreditCardOutlined />}
                      className="w-full bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700 h-12"
                    >
                      Comprar Agora
                    </Button>
                  </div>

                  {/* Informações Adicionais */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Informações do Produto</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div><strong>ID:</strong> #{product.id}</div>
                      <div><strong>Categoria:</strong> {product.category}</div>
                      <div><strong>Disponibilidade:</strong> Em estoque</div>
                      <div><strong>Entrega:</strong> 5-7 dias úteis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Divider />

            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Descrição do Produto</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>
            </div>

            <Divider />

            <div className="p-8 bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Especificações</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Informações Gerais</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Nome:</span>
                      <span className="font-medium">{product.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Categoria:</span>
                      <span className="font-medium">{product.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">ID do Produto:</span>
                      <span className="font-medium">#{product.id}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Avaliações</h3>
                  <div className="space-y-2 text-sm">
                    {product.rating ? (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Nota Média:</span>
                          <span className="font-medium">{product.rating.rate}/5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total de Avaliações:</span>
                          <span className="font-medium">{product.rating.count}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Recomendação:</span>
                          <span className="font-medium">
                            {product.rating.rate >= 4 ? "Altamente Recomendado" : 
                             product.rating.rate >= 3 ? "Recomendado" : "Regular"}
                          </span>
                        </div>
                      </>
                    ) : (
                      <span className="text-gray-500">Sem avaliações disponíveis</span>
                    )}
                  </div>
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