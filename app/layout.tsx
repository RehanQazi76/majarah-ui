import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

export const metadata: Metadata = {
  title: "Majarah",
  description: "Professional digital marketing and branding services",
  icons: {
    icon: [
      { url: '/icons/logoBlackUFO.svg', type: 'image/svg+xml' },
      { url: '/icons/logoblackUFO.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/icons/logoBlackUFO.svg',
    apple: '/icons/logoBlackUFO.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                document.addEventListener('click', function(e) {
                  if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
                    e.preventDefault();
                    const targetId = e.target.getAttribute('href')?.substring(1);
                    const element = document.getElementById(targetId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
