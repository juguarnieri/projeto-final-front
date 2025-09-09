export default function ProductSpecifications({ product }) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Especificações</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
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
  
          <div className="bg-gray-50 p-4 rounded-lg">
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
    );
  }