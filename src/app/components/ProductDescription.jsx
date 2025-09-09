export default function ProductDescription({ description }) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Descrição do Produto</h2>
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg">
            {description}
          </p>
        </div>
      </div>
    );
  }