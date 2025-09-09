import { Button } from "antd";
import { ArrowLeftOutlined, HomeOutlined } from "@ant-design/icons";
import Header from "./Header";
import Footer from "./Footer";

export default function ErrorState({ 
  onGoBack, 
  onGoHome, 
  title = "Produto não encontrado", 
  description = "O produto solicitado não existe ou foi removido." 
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 to-rose-200">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center bg-white rounded-2xl shadow-xl p-8 max-w-md">
          <div className="text-6xl mb-4">😔</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          <div className="flex flex-col gap-3">
            <Button 
              type="primary"
              icon={<ArrowLeftOutlined />}
              onClick={onGoBack}
              className="bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600"
              size="large"
            >
              Voltar aos Produtos
            </Button>
            <Button 
              icon={<HomeOutlined />}
              onClick={onGoHome}
              className="bg-blue-500 hover:bg-blue-600 text-white border-blue-500 hover:border-blue-600"
              size="large"
            >
              Voltar ao Início
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}