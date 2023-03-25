// change this page postfix to .jsx because it fixs the importing Nav component tha was asyn

import Nav from './components/auth/Nav'
import './globals.css'
import {Roboto} from 'next/font/google';

const roboto = Roboto({
  subsets : ['latin'],
  weight : ["400" , "700"],
  variable : "--font-roboto",
})

export const metadata = {
  title: 'Full stack app',
  description: 'Developed by Honeloper',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-48 xl:mx-96 ${roboto.variable} bg-gray-20`}>
        <Nav />
        {children}
        </body>
    </html>
  )
}
