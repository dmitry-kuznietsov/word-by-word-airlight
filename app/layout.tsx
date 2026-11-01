import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import "./atmosphere.css";
import "./airlight.css";
import "./dictionary.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Word by Word — англійська через читання";
  const description = "Читайте англійською, перекладайте слова одним дотиком і завантажуйте власні книжки — безкоштовно та без обмежень.";
  return {
    title,
    description,
    icons: { icon: "/word-by-word-mark.png", shortcut: "/word-by-word-mark.png", apple: "/word-by-word-mark.png" },
    openGraph: { title, description, type: "website", images: [`${origin}/og.png`] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
