import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khairatul's Portfolio",
  description:
    "Welcome to the personal portfolio of Muhammad Khairatul, a versatile Front end developer, Data Scientist, and Designer specialist with expertise in web and mobile app development, automation, and video editing.",
  keywords: [
    "Muhammad Khairatul",
    "Front end developer",
    "Data Scientist",
    "Designer",
    "web development",
    "mobile app development",
    "UI/UX",
    "video editing",
    "portfolio",
  ],
  authors: [{ name: "Muhammad Khairatul" }],
  creator: "Muhammad Khairatul",
  publisher: "Muhammad Khairatul",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Muhammad Khairatul",
    description:
      "Personal portfolio showcasing expertise in software engineering, coloring, and RPA.",
    url: "https://www.yourwebsite.com",
    siteName: "Muhammad Khairatul Portfolio",
    images: [
      {
        url: "https://www.yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Khairatul Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Khairatul | Software Engineer & Colorist",
    description:
      "Personal portfolio showcasing expertise in software engineering, coloring, and RPA.",
    creator: "@Khairatul",
    images: ["https://www.yourwebsite.com/twitter-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N3W96JXQNT"
        ></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N3W96JXQNT');`}
        </Script>
        <meta
          name="google-site-verification"
          content="SB-3CM2udTlzDWz9PkjqPrNRjLzSIAvaarREPe6C6uY"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
