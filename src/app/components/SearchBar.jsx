import { Input } from "antd";

const { Search } = Input;

export default function SearchBar({ onSearch, placeholder = "Pesquisar produtos..." }) {
  return (
    <div className="flex justify-center mt-8 px-4">
      <Search
        placeholder={placeholder}
        allowClear
        enterButton={
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-r-lg border border-rose-500 hover:border-rose-600">
            🔍 Buscar
          </button>
        }
        size="large"
        onSearch={onSearch}
        className="max-w-md search-bar-custom"
      />
      <style jsx global>{`
        .search-bar-custom .ant-input {
          border-color: #f43f5e;
        }
        .search-bar-custom .ant-input:focus {
          border-color: #e11d48;
          box-shadow: 0 0 0 2px rgba(244, 63, 94, 0.2);
        }
        .search-bar-custom .ant-input-search-button {
          background-color: #f43f5e !important;
          border-color: #f43f5e !important;
        }
        .search-bar-custom .ant-input-search-button:hover {
          background-color: #e11d48 !important;
          border-color: #e11d48 !important;
        }
      `}</style>
    </div>
  );
}