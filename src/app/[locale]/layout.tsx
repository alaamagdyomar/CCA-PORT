import { NextIntlClientProvider } from 'next-intl';
import {getMessages} from 'next-intl/server';
import { notFound } from 'next/navigation';
import {Locale, routing} from './../../i18n/routing';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Props = {
  children: React.ReactNode;
  params: { locale: Locale };
};

export async function generateStaticParams() {
  return ['en', 'ar', 'fr', 'ru'].map((locale) => ({ locale }));
}

export default async function Layout({ children, params }: Props) {
  const { locale } = params;
    if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();



  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 



