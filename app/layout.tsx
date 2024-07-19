import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rent Direct",
  description: "Experience a stress-free rental search. Our app connects you directly with landlords, offering transparent listings and secure communication. Find your perfect place, the simple and efficient way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
		  <body className={inter.className}>
		  <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          > 
            {children}
          </ThemeProvider>
		  </body>
    </html>
  );
}
