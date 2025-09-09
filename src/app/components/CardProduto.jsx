import { Button } from "antd";

export default function CardProduto({ produto, onDetalhes }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden h-[500px] flex flex-col">
      <div className="relative">
        <img
          src={produto.image}
          alt={produto.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="absolute top-3 right-3 bg-rose-500 text-white px-3 py-2 rounded-full text-sm font-semibold">
          ${produto.price}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="mb-3">
            <span className="inline-block bg-pink-100 text-pink-800 text-sm px-3 py-2 rounded-full font-medium">
              {produto.category}
            </span>
          </div>

          <h3 className="font-bold text-gray-800 mb-4 text-lg line-clamp-3">
            {produto.title}
          </h3>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="text-2xl font-bold text-rose-600">${produto.price}</div>
          <Button
            onClick={() => onDetalhes(produto)}
            className="bg-rose-500 hover:bg-rose-600 text-white border-rose-500 hover:border-rose-600 rounded-full px-4 py-2 flex-shrink-0"
          >
            🔍 Detalhes
          </Button>
        </div>
      </div>
    </div>
  );
}