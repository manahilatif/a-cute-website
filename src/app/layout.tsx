import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Cute Website",
  description: "Send beautiful personalised cards to the people you love, for every occasion.",
  openGraph: {
    title: "A Cute Website — Send a little love",
    description: "Send beautiful personalised cards to the people you love.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}