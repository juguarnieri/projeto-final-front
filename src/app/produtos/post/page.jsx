"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ProductPostPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [addedProducts, setAddedProducts] = useState([]);
    const [form, setForm] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        image: ""
    });
    const [error, setError] = useState(false);

    useEffect(() => {
        const savedProducts = localStorage.getItem("addedProducts");
        if (savedProducts) {
            setAddedProducts(JSON.parse(savedProducts));
        }
    }, []);

    const createNewProduct = async () => {
        setLoading(true);
        setError(false);

        try {
            const response = await axios.post("https://fakestoreapi.com/products", {
                title: form.title.trim(),
                price: parseFloat(form.price),
                description: form.description.trim(),
                category: form.category.trim(),
                image: form.image.trim(),
            });

            const updatedProducts = [response.data, ...addedProducts];
            setAddedProducts(updatedProducts);
            localStorage.setItem("addedProducts", JSON.stringify(updatedProducts));

            const existingProducts = JSON.parse(localStorage.getItem("allProducts")) || [];
            localStorage.setItem("allProducts", JSON.stringify([response.data, ...existingProducts]));

            setForm({ title: "", price: "", description: "", category: "", image: "" });

        } catch (error) {
            setError(true);
            console.error("Erro ao adicionar produto:", error);
        } finally {
            setLoading(false);
        }
    };

    const updateForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <main className="min-h-screen bg-pink-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-pink-900">
                        POST - Adicionar Produto
                    </h1>
                    <button
                        onClick={() => router.push("/produtos")}
                        className="bg-pink-200 text-pink-700 px-4 py-2 rounded-md hover:bg-pink-300 transition-colors"
                    >
                        ← Voltar
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-pink-700 mb-1">
                                Título *
                            </label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Digite o título do produto"
                                value={form.title}
                                onChange={updateForm}
                                className="w-full px-4 py-2 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-colors"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-pink-700 mb-1">
                                Preço *
                            </label>
                            <input
                                type="number"
                                name="price"
                                placeholder="0.00"
                                value={form.price}
                                onChange={updateForm}
                                step="0.01"
                                min="0"
                                className="w-full px-4 py-2 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-colors"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-pink-700 mb-1">
                                Descrição *
                            </label>
                            <textarea
                                name="description"
                                placeholder="Digite a descrição do produto"
                                value={form.description}
                                onChange={updateForm}
                                rows="4"
                                className="w-full px-4 py-2 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-colors resize-vertical"
                                required
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-pink-700 mb-1">
                                Categoria *
                            </label>
                            <select
                                name="category"
                                value={form.category}
                                onChange={updateForm}
                                className="w-full px-4 py-2 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-colors"
                                required
                            >
                                <option value="">Selecione uma categoria</option>
                                <option value="electronics">Eletrônicos</option>
                                <option value="jewelery">Joias</option>
                                <option value="men's clothing">Roupas Masculinas</option>
                                <option value="women's clothing">Roupas Femininas</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-pink-700 mb-1">
                                URL da Imagem *
                            </label>
                            <input
                                type="url"
                                name="image"
                                placeholder="https://exemplo.com/imagem.jpg"
                                value={form.image}
                                onChange={updateForm}
                                className="w-full px-4 py-2 border border-pink-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-colors"
                                required
                            />
                            {form.image && (
                                <div className="mt-4 flex justify-center">
                                    <img 
                                        src={form.image} 
                                        alt="Preview" 
                                        className="h-32 w-32 object-cover rounded-md border"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        <button
                            onClick={createNewProduct}
                            disabled={!form.title || !form.price || !form.description || !form.category || !form.image || loading}
                            className="w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white py-3 px-4 rounded-md font-medium hover:from-pink-600 hover:to-pink-800 disabled:bg-pink-300 disabled:cursor-not-allowed transition-colors duration-200"
                        > 
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    Adicionando...
                                </div>
                            ) : (
                                "Adicionar Produto"
                            )}
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="bg-pink-100 border border-pink-400 text-pink-700 px-4 py-3 rounded mb-6">
                        <div className="flex items-center">
                            <svg className="h-5 w-5 text-pink-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            Ocorreu um erro ao adicionar o produto. Tente novamente.
                        </div>
                    </div>
                )}

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold text-pink-900 mb-6">
                        Produtos Criados ({addedProducts.length})
                    </h2>
                    
                    {addedProducts.length === 0 ? (
                        <div className="text-center py-12">
                            <svg className="mx-auto h-12 w-12 text-pink-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                <path d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3 className="mt-2 text-sm font-medium text-pink-900">Nenhum produto criado</h3>
                            <p className="mt-1 text-sm text-pink-500">
                                Comece criando seu primeiro produto usando o formulário acima.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {addedProducts.map((product, index) => (
                                <div key={product.id || index} className="border border-pink-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div className="flex items-start space-x-4">
                                        {product.image && (
                                            <img 
                                                src={product.image} 
                                                alt={product.title}
                                                className="h-20 w-20 object-cover rounded-md border flex-shrink-0"
                                                onError={(e) => {
                                                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yOCAzNkg1MkM1My4xIDM2IDU0IDM2LjkgNTQgMzhWNTJDNTQgNTMuMSA1My4xIDU0IDUyIDU0SDI4QzI2LjkgNTQgMjYgNTMuMSAyNiA1MlYzOEMyNiAzNi45IDI2LjkgMzYgMjggMzZaIiBzdHJva2U9IiM5Q0E0QUYiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMzUgNDRMNDAgNDlMNDggNDEiIHN0cm9rZT0iIzlDQTRBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+'; 
                                                }}
                                            />
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <div>
                                                    <span className="font-semibold text-pink-700">ID:</span>
                                                    <span className="ml-2 text-pink-600">{product.id}</span>
                                                </div>
                                                <div>
                                                    <span className="font-semibold text-pink-700">Preço:</span>
                                                    <span className="ml-2 text-pink-600">R$ {Number(product.price).toFixed(2)}</span>
                                                </div>
                                                <div className="md:col-span-2">
                                                    <span className="font-semibold text-pink-700">Título:</span>
                                                    <span className="ml-2 text-pink-600">{product.title}</span>
                                                </div>
                                                <div>
                                                    <span className="font-semibold text-pink-700">Categoria:</span>
                                                    <span className="ml-2 text-pink-600 capitalize">{product.category}</span>
                                                </div>
                                                <div className="md:col-span-2">
                                                    <span className="font-semibold text-pink-700">Descrição:</span>
                                                    <span className="ml-2 text-pink-600">{product.description}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}