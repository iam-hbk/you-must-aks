import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "You must aks",
  description: "Just ask questions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>nav</nav>
        <main className="flex min-h-screen flex-col p-10 ">{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
