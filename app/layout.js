import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bailakoa | Grupo Musical Femenino",
  description:
    "Grupo musical femenino para bodas, eventos empresariales, fiestas privadas y celebraciones en toda Colombia.",
  openGraph: {
    title: "Bailakoa | Grupo musical femenino",
    description:
      "Elegancia, feminidad y modernidad para eventos en toda Colombia.",
    url: "https://bailakoa-web.vercel.app",
    siteName: "Bailakoa",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bailakoa - Grupo musical femenino",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bailakoa | Grupo musical femenino",
    description:
      "Elegancia, feminidad y modernidad para eventos en toda Colombia.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
