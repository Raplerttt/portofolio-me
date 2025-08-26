import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Professional Portfolio',
  description: 'Showcasing my projects and achievements',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}