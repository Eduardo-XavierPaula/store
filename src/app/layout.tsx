import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="min-h-screen bg-background relative">
					<div className="bg-yellow-300 text-center sticky top-0 z-[9999]">
						Esta não é uma loja Real
					</div>
					<Header />
					<main className="min-h-[calc(100vh-393px)] flex flex-col">
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
