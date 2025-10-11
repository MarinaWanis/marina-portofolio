import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Marina Maged - RPA & Power BI Specialist",
    template: "%s | Marina Maged"
  },
  description: "Professional portfolio showcasing RPA automation, Power BI dashboards, and software engineering expertise. Explore my projects and technical insights.",
  keywords: ["RPA", "Power BI", "Software Engineering", "Automation", "Business Intelligence", "Portfolio"],
  authors: [{ name: "Marina Maged" }],
  creator: "Marina Maged",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marinamaged.com",
    title: "Marina Maged - RPA & Power BI Specialist",
    description: "Professional portfolio showcasing RPA automation, Power BI dashboards, and software engineering expertise.",
    siteName: "Marina Maged Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marina Maged - RPA & Power BI Specialist",
    description: "Professional portfolio showcasing RPA automation, Power BI dashboards, and software engineering expertise.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

