import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Hunting Coder",
    description: "A blog for hunting coders by a hunting coder",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" >
            <body className={inter.className} suppressHydrationWarning={true}>
                <main className="min-h-screen flex-col items-center justify-between">
                    <Navbar></Navbar>
                    <div className="bg-white py-14 m:py-22">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        {children}
                        </div>
                    </div>
                </main>
            </body>
        </html>
    );
}
