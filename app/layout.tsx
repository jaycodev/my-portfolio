import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/sections";

import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portafolio de jaycodev - Desarrollador Full Stack",
  description:
    "Portafolio de jaycodev, desarrollador Full Stack. Descubre proyectos, habilidades y contacto para colaboración y aprendizaje.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="oklch(0.141 0.005 285.823)" />

        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon-dark.svg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon-light.svg"
          media="(prefers-color-scheme: dark)"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent theme flash on first load
              const theme =
                localStorage.getItem('theme') ||
                (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              document.documentElement.classList.add(theme);

              const meta = document.querySelector('meta[name="theme-color"]');
              if (meta) {
                meta.content = theme === 'dark' ? 'oklch(0.141 0.005 285.823)' : 'oklch(1 0 0)';
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableColorScheme
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
