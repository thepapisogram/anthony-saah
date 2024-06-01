import { Open_Sans} from 'next/font/google'

import "@/app/styles/globals.css";
import NavBar from "@/app/components/universal/Navbar/NavBar"
import Footer from '@/app/components/universal/Footer/Footer';

const open_sans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Welcome 👋🏾",
  description: "Explore my portfolio to discover more about me and my passion for crafting exceptional digital experiences"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} app`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
