import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import BackgroundParticles from "@/components/ui/BackgroundParticles";
import FloatingVectorParticles from "@/components/ui/FloatingVectorParticles";
import Cursor from "@/components/ui/Cursor";
import Preloader from "@/components/ui/Preloader";
import NavbarFullMenu from "@/components/layout/NavbarFullMenu";
import MotionLayout from "@/components/layout/MotionLayout";
import SmoothScroll from "@/components/layout/SmoothScroll";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: 'swap',
    preload: true
});
const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: 'swap',
    preload: true
});

export const metadata: Metadata = {
    metadataBase: new URL('https://inkspire.studio'),
    title: {
        default: "Inkspire Studio | Cinematic Digital Experiences",
        template: "%s | Inkspire Studio"
    },
    description: "We turn raw ideas into cinematic digital experiences. Expert web design, development, branding, and motion graphics in Amman, Jordan.",
    keywords: ["web design", "web development", "branding", "motion graphics", "digital agency", "creative studio", "Amman", "Jordan", "UI/UX design"],
    authors: [{ name: "Mohammad Aldomi" }],
    creator: "Inkspire Studio",
    publisher: "Inkspire Studio",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://inkspire.studio",
        title: "Inkspire Studio | Cinematic Digital Experiences",
        description: "We turn raw ideas into cinematic digital experiences. Expert web design, development, and branding.",
        siteName: "Inkspire Studio",
        images: [{
            url: "/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Inkspire Studio"
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Inkspire Studio | Cinematic Digital Experiences",
        description: "We turn raw ideas into cinematic digital experiences.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        // Add your verification codes here later
        // google: 'your-google-verification-code',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <meta name="theme-color" content="#000000" />
            </head>
            <body className="antialiased overflow-x-hidden bg-black text-white selection:bg-inkspirePurple selection:text-white">
                <Preloader />
                <SmoothScroll>
                    <BackgroundParticles />
                    <FloatingVectorParticles />
                    <Cursor />
                    <NavbarFullMenu />
                    <MotionLayout>
                        {children}
                    </MotionLayout>
                </SmoothScroll>
            </body>
        </html>
    );
}
