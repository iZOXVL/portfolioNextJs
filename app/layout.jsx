import Nav from "@/components/Nav";
import Header from "@/components/Header";
import "./globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Layout({ children }) {
  return (
      <div className={inter.className}>
        <Nav />
        <Header />
        <main>
          {children}
        </main>
      </div>
  );
}
