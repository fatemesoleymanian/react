// change this page postfix to .jsx because it fixs the importing Nav component tha was asyn
'use client'
import Nav from './components/auth/Nav'
import AppStore from '@/contex/user';
import './globals.css'
import {Roboto} from 'next/font/google';
import QueryWrapper from './components/auth/QueryWrapper';
//we can't add hot toaster in here cause this is not client side and toas needs client, so i use toaster in query wrapper
const roboto = Roboto({
  subsets : ['latin'],
  weight : ["400" , "700"],
  variable : "--font-roboto",
})

// export const metadata = {
//   title: 'Full stack app',
//   description: 'Developed by Honeloper',
// }

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-48 xl:mx-96 ${roboto.variable} bg-gray-200`}>
        <AppStore>
        <QueryWrapper>
          <Nav />
          {children}
        </QueryWrapper>
        </AppStore>
        </body>
    </html>
  )
}
