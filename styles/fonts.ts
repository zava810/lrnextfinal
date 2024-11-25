import localFont from 'next/font/local'; 
import { Inter, Lusitana } from 'next/font/google';
export const inter = Inter({ subsets: ['latin'] }); 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export const hin115_font = localFont({
    src: './hin115.woff2',
    display: 'swap',
});