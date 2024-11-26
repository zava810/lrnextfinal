import '@/app/ui/global.css';
import { hin115_font } from '@/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | ᴀcme dᴀshboᴀrd',
    default: 'ᴀcme dᴀshboᴀrd',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${hin115_font.className} antialiased`}>{children}</body>
    </html>
  );
}
