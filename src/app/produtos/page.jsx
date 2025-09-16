"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Produtos from "../components/Produtos";
import SearchBar from "../components/SearchBar";
import ScrollToTop from "../components/ScrollToTop";

export default function ProductsPage() {
    const [addedProducts, setAddedProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    // Carregar produtos criados do localStorage
    useEffect(() => {
        loadFromLocalStorage();
    }, []);

    const loadFromLocalStorage = () => {
        const saved = localStorage.getItem('addedProducts');
        if (saved) {
            setAddedProducts(JSON.parse(saved));
        }
    };

    const clearAddedProducts = () => {
        setAddedProducts([]);
        localStorage.removeItem('addedProducts');
        toast.info("🗑️ Produtos limpos!", {
            position: "top-right",
            autoClose: 2000,
            theme: "colored",
        });
    };

    const downloadImage = async (imageUrl, productTitle) => {
        try {
            toast.info("📥 Iniciando download...", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
            });

            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = `${productTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);

            toast.success("✅ Imagem baixada com sucesso!", {
                position: "top-right",
                autoClose: 3000,
                theme: "colored",
            });
        } catch (error) {
            console.error('Erro ao fazer download da imagem:', error);
            toast.error("❌ Erro ao baixar imagem!", {
                position: "top-right",
                autoClose: 3000,
                theme: "colored",
            });
        }
    };

    const handleDetalhes = (produto) => {
        router.push(`/produtos/${produto.id}`);
        
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

    const goToCreateProduct = () => {
        router.push('/produtos/post');
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

                <div className="max-w-6xl mx-auto px-4 py-8">
                    {/* SEÇÃO ADMINISTRATIVA */}
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    Administrar Produtos
                                </h1>
                                <p className="text-gray-600">
                                    Gerencie sua coleção de produtos personalizados
                                </p>
                            </div>
                            
                            <button
                                onClick={goToCreateProduct}
                                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-in-out rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-300/50 active:scale-95"
                            >
                                <span className="relative flex items-center gap-2">
                                    <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                    Criar Produto
                                </span>
                                
                                {/* Efeito de brilho */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            </button>
                        </div>
                    </div>

                    {/* PRODUTOS CRIADOS */}
                    {addedProducts.length > 0 && (
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-100 p-2 rounded-lg">
                                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Meus Produtos Criados ({addedProducts.length})
                                    </h2>
                                </div>
                                <button
                                    onClick={clearAddedProducts}
                                    className="bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                                >
                                    🗑️ Limpar Todos
                                </button>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {addedProducts.map((product) => (
                                    <div key={product.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
                                        <div className="relative group">
                                            {product.image && (
                                                <div className="relative overflow-hidden rounded-lg mb-4">
                                                    <img 
                                                        src={product.image} 
                                                        alt={product.title}
                                                        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                                                        onError={(e) => {
                                                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5Q0E0QUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlbTwvdGV4dD4KPC9zdmc+';
                                                        }}
                                                    />
                                                    {/* Botão de download da imagem */}
                                                    <button
                                                        onClick={() => downloadImage(product.image, product.title)}
                                                        className="absolute top-2 right-2 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
                                                        title="Baixar imagem"
                                                    >
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-lg">{product.title}</h3>
                                        <p className="text-xl font-bold text-green-600 mb-2">R$ {Number(product.price).toFixed(2)}</p>
                                        <p className="text-sm text-gray-600 mb-3 capitalize bg-gray-100 px-2 py-1 rounded-full inline-block">{product.category}</p>
                                        <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">{product.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Mensagem quando não há produtos criados */}
                    {addedProducts.length === 0 && (
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 text-center">
                            <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-400 mx-auto mt-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Nenhum produto criado ainda
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Clique no botão "Criar Produto" para começar a adicionar seus produtos personalizados.
                            </p>
                            <button
                                onClick={goToCreateProduct}
                                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                            >
                                Criar Primeiro Produto
                            </button>
                        </div>
                    )}
                </div>
            </main>
            
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
}