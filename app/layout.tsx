"use client";
import '@/app/ui/global.css';
import React, { useState } from 'react';
import { hin115_font, ing115_font, bangla115_font, telugu115_font } from '@/fonts';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: {
//     template: '%s | Acme dAshboArd',
//     default: 'Acme dAshboArd',
//   },
//   description: 'The official Next.js Learn Dashboard built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };
export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  // https://stackoverflow.com/questions/72946973/how-to-access-a-state-of-an-component-from-another-component-in-next-js
  const [selectedFont, setSelectedFont] = useState(ing115_font);
  const handleFontChange = (font: any) => { setSelectedFont(font); };
  const getFontClass = (sval:string) => {
    switch (sval) {
      case '0': return ing115_font ;
      case '1': return hin115_font ;
      case '2': return bangla115_font ;
      case '3': return telugu115_font ;
      default: return ing115_font ;
    }
  }
  return (
    <html lang="en">
        <body className={`${selectedFont.className} antialiased`}>
        <div>
          <select onChange={(e) => handleFontChange(getFontClass(e.target.value))}>
            <option value="0">ing115 font</option>
            <option value="1">hin115 font</option>
            <option value="2">bangla115 font</option>
            <option value="3">telugu115 font</option>
          </select>
        </div>
          {children}
        </body>
    </html>
  );
}