import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MotherNode - Build production agents in 90 seconds',
  description:
    'The first AI agent creation studio on Tetto. Transform ideas into deployable specifications and complete implementation guides.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
