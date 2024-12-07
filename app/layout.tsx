"use client";
import '@/app/ui/global.css';
import React, { useState } from 'react';
////binaryhoriontal115.woff2  hex115.woff2 binaryvertical115.woff2
import {
		hin115_font, ing115_font, bangla115_font, telugu115_font,
		mlyalm115_font, tmil115_font, kannada115_font, odia115_font,
		sinhala115_font, pnzabi115_font, guzrati115_font, binaryvertical115_font
} from '@/fonts';
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
  const [f, setf] = useState(ing115_font.className);

  const handlevaluechange = (selectedval: string) => {
    const getFontcn = (sval:string) => {
      switch (sval) {
        case '0': return ing115_font.className ;
        case '1': return hin115_font.className ;
        case '2': return bangla115_font.className ;
        case '3': return telugu115_font.className;
        case '4': return mlyalm115_font.className ;
        case '5': return tmil115_font.className ;      
        case '6': return kannada115_font.className ;
        case '7': return odia115_font.className ;
        case '8': return sinhala115_font.className ;
        case '9': return pnzabi115_font.className ;
        case 'L': return guzrati115_font.className ;
        case 'J': return binaryvertical115_font.className ;
        default: return ing115_font.className ;
      }
    }
    const selectedf = getFontcn(selectedval);
    setf(selectedf);
  };

  return (
    <html lang="en">
        <body className={`${f} antialiased`}>
          <div>
            <select onChange={(e) => handlevaluechange(e.target.value)}>
            <option value="0">iNg115_font</option>
            <option value="1">hin115_font</option>
            <option value="2">bangla115_font</option>
            <option value="3">telugu115_font</option>
            <option value="4">mlyalm115_font</option>
            <option value="5">tmil115_font</option>
            <option value="6">kannada115_font</option>
            <option value="7">odia115_font</option>
            <option value="8">sinhala115_font</option>
            <option value="9">pnzabi115_font</option>
            <option value="L">guzrati115_font</option>
            <option value="J">binaryvertical115_font</option>
          </select>
        </div>
          {children}
        </body>
    </html>
  );
}
