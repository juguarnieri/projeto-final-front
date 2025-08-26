import "./globals.css";

export const metadata = {
  title: "Tailwind CSS with Next.js",
  description: "A simple Next.js app using Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}