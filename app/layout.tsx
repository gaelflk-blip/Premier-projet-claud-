import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://acatacos.be'),
  title: "Acatacos — Street Food Mexicaine Artisanale à Bruxelles",
  description: "Tacos artisanaux, tortillas maison, recettes mexicaines authentiques. Retrouvez Acatacos sur les marchés de Bruxelles depuis plus de 8 ans.",
  keywords: "tacos, mexicain, artisanal, Bruxelles, street food, marchés, tortillas maison",
  icons: {
    icon: '/67E18DF9-0FCF-414E-9E80-FF932405E769.png',
    apple: '/67E18DF9-0FCF-414E-9E80-FF932405E769.png',
  },
  openGraph: {
    title: "Acatacos — Le vrai goût du Mexique à Bruxelles",
    description: "Tacos artisanaux faits maison sur les marchés de Bruxelles depuis plus de 8 ans.",
    type: "website",
    locale: "fr_BE",
    images: [{ url: '/67E18DF9-0FCF-414E-9E80-FF932405E769.png', width: 1024, height: 1024, alt: 'Acatacos logo' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
