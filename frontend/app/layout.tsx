import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NetIntel",
  description: "Monitor network traffic, connections, and performance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
