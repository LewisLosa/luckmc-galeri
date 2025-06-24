import type { Metadata } from "next";
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
};

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