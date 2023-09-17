import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: 'Frontend Mentor | Notifications page',
}

const plusJakartaSans = localFont({
  src: './fonts/PlusJakartaSans-VariableFont_wght.ttf',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} font-medium bg-very-light-grayish-blue`}
      >
        {children}
      </body>
    </html>
  )
}
