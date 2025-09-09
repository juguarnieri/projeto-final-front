import "./globals.css";

export const metadata = {
  title: "Sua Loja - Os melhores produtos",
  description: "Bem-vindo à nossa loja! Aqui você encontra os melhores produtos com qualidade e preço justo. Explore nossas categorias e aproveite as ofertas!",
  keywords: "loja, produtos, ofertas, qualidade, preço justo, compras online",
  authors: [{ name: "Sua Loja" }],
  creator: "Sua Loja",
  publisher: "Sua Loja",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Sua Loja - Os melhores produtos",
    description: "Os melhores produtos com qualidade e preço justo",
    url: "https://seusite.com",
    siteName: "Sua Loja",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sua Loja - Os melhores produtos",
    description: "Os melhores produtos com qualidade e preço justo",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f43f5e" />
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}