import "./globals.css";
import MainMenu from "@/components/organisms/MainMenu";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Link from "next/link";
import { metadataFr, metadataEn } from "../../metadata/metadata";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "fr") {
    return metadataFr;
  }
  return metadataEn; // Default to English metadata for non-French locales
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  const { locale } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} className="font-sans ">
      <head>
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="mx-auto flex min-h-screen max-w-4xl flex-col ">
        <NextIntlClientProvider messages={messages}>
          <main className="grow md:px-8 px-2">
            <MainMenu />
            {children}
          </main>
          <footer className="my-6 flex gap-6 flex-wrap items-center justify-center">
            <section>
              <p className="text-center text-xs text-muted-foreground">
                <span>© 2024 </span>
                <Link className="link" href={`/${locale}/`}>
                  portfolio.thibault-rossa.fr
                </Link>
                {" | "}
                <Link className="link font-bold" href={`/${locale}/privacy`}>
                  privacy?
                </Link>
              </p>
            </section>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
