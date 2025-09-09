import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          <Link href="/">Babi's Store</Link>
        </h1>
        <nav className="space-x-6">
          <Link href="/produtos" className="text-gray-600 hover:text-pink-500 font-medium">
            Produtos
          </Link>
          <Link href="/perfil" className="text-gray-600 hover:text-pink-500 font-medium">
            Sobre
          </Link>
          <Link href="/contato" className="text-gray-600 hover:text-pink-500 font-medium">
            Contato
          </Link>
          <Link href="/apiinfo" className="text-gray-600 hover:text-pink-500 font-medium">
            API
          </Link>
        </nav>
      </div>
    </header>
  );
}