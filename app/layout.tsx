import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const PoppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LuckMC Galerisi",
  description: "LuckMC Minecraft sunucusunun görselleri",
  alternates: {
    canonical: "https://galeri.luckmc.net/",
    languages: {
      "tr": "https://galeri.luckmc.net/"
    },
  },
  
  openGraph: {
    title: "LuckMC Galerisi",
    description: "LuckMC Minecraft sunucusunun görselleri",
    url: "https://galeri.luckmc.net/",
    authors: ['Eyüp Şengöz', 'losa.dev', 'LewisLosa', 'LuckMC'],
    images: [
      {
        url: "/og-image.avif",
        width: 1920,
        height: 1080,
        alt: "LuckMC Galerisi",
      },
    ],
    siteName: "LuckMC Galerisi",
  },
};

export const viewport: Viewport = {
  themeColor: '#5aefb2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( //Scroll-smooth gerçekten işe yarıyor mu bilmiyorum ama deneyebilirsin.
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${PoppinsSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}