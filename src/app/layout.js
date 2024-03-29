
import { Roboto } from 'next/font/google'
import './globals.css'
import {Header} from './components/layout/Header'
import {AppProvider} from '../app/components/AppContext'
const roboto = Roboto({ subsets: ['latin'],weight:['400','500','700'] })

export const metadata = {
  title: 'Food-Ordering-App',
  description: 'Generated by Ankit Verma',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppProvider>
        <Header/>
        {children}
        <footer className="flex items-center justify-center my-8">
        &copy;2024 All Rights Reserved
          </footer>
        </AppProvider>
        </body>
    </html>
  )
}
