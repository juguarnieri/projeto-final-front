import { Rate, Button } from "antd";
import { ShoppingCartOutlined, CreditCardOutlined, TagOutlined } from "@ant-design/icons";

export default function ProductCard({ product }) {
  return (
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

            <div className="bg-rose-50 p-6 rounded-xl">
              <div className="text-4xl font-bold text-rose-600 mb-2">
                ${product.price}
              </div>
              <div className="text-sm text-gray-600">
                Preço à vista no cartão de crédito
              </div>
            </div>


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
    </div>
  );
}