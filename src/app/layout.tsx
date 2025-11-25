import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Voytrail',
  description: 'Linktree for Hospitality World',
  icons: {
    icon: [{ url: './favicon.ico' }, { url: './favicon-dark.ico', media: '(prefers-color-scheme: dark)' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.variable} antialiased flex items-center justify-center`}>{children}</body>
    </html>
  );
}
