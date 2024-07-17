import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './_components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'EdUnify',
  description: 'Get your institution online with edunify',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
