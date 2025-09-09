import { Spin } from "antd";
import Header from "./Header";
import Footer from "./Footer";

export default function LoadingState({ message = "Carregando..." }) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-100 to-rose-200">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <Spin size="large" />
          <p className="text-rose-600 text-lg mt-4">{message}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}