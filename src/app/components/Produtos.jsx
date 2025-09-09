import { useEffect, useState } from "react";
import { Pagination } from "antd";
import axios from "axios";
import CardProduto from "./CardProduto";

export default function Produtos({ onDetalhes, searchTerm }) {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const produtosPorPagina = 10; 

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProdutos(response.data);
      } catch (erro) {
        console.error("Erro ao carregar produtos:", erro);
      } finally {
        setCarregando(false);
      }
    };

    carregarProdutos();
  }, []);

  const produtosFiltrados = produtos.filter(produto =>
    produto.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indiceInicial = (paginaAtual - 1) * produtosPorPagina;
  const produtosExibidos = produtosFiltrados.slice(
    indiceInicial,
    indiceInicial + produtosPorPagina
  );

  useEffect(() => {
    setPaginaAtual(1);
  }, [searchTerm]);

  if (carregando) {
    return (
      <div className="text-center mt-12">
        <div className="text-6xl mb-4 animate-spin">🔄</div>
        <p className="text-rose-600 text-lg">Carregando produtos...</p>
      </div>
    );
  }

  return (
    <div className="px-8 sm:px-12 lg:px-16 mt-8">
      {produtosFiltrados.length === 0 ? (
        <div className="text-center mt-12">
          <div className="text-6xl mb-4">😔</div>
          <p className="text-rose-600 text-lg">
            Nenhum produto encontrado para "{searchTerm}"
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {produtosExibidos.map((produto) => (
              <CardProduto
                key={produto.id}
                produto={produto}
                onDetalhes={onDetalhes}
              />
            ))}
          </div>

          {produtosFiltrados.length > produtosPorPagina && (
            <div className="flex justify-center mt-8">
              <Pagination
                current={paginaAtual}
                pageSize={produtosPorPagina}
                total={produtosFiltrados.length}
                onChange={(page) => setPaginaAtual(page)}
                showSizeChanger={false}
                showQuickJumper
                showTotal={(total, range) =>
                  `${range[0]}-${range[1]} de ${total} produtos`
                }
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}