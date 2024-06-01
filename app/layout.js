import { Open_Sans} from 'next/font/google'

import "@/app/styles/globals.css";
import NavBar from "@/app/components/universal/Navbar/NavBar"
import Footer from '@/app/components/universal/Footer/Footer';

import site_info from '@/site_info';

const open_sans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: site_info.home.title,
  description: site_info.general.description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} app`}>
        <NavBar />
        {children}
        <Footer author={site_info.author} year={site_info.year} last_updated={site_info.last_updated} />
      </body>
    </html>
  );
}
