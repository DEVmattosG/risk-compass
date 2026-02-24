import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Risk Compass',
  description: 'Gestão de riscos com matriz 5x5',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-50">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-slate-800 px-8 py-4 flex items-center justify-between">
            <span className="font-semibold text-lg">Risk Compass</span>
          </header>
          <main className="flex-1 px-8 py-6">{children}</main>
        </div>
      </body>
    </html>
  );
}

