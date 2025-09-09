import { Button } from "antd";
import { ArrowLeftOutlined, HomeOutlined } from "@ant-design/icons";

export default function NavigationButtons({ onGoBack, onGoHome }) {
  return (
    <div className="mt-16 mb-8 flex flex-col sm:flex-row gap-4">
      <Button 
        icon={<ArrowLeftOutlined />}
        onClick={onGoBack}
        className="bg-rose-500 hover:bg-rose-600 text-white border-rose-500 hover:border-rose-600"
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
  );
}