import '../../styles/globals.css'
import { Staatliches, Raleway } from 'next/font/google'

const staatliches = Staatliches({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-staatliches',
  display: 'swap',
})
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata = {
  title: 'Ana Arango - Front End Developer',
  description: 'A passionate Front-End Developer with a mission to find newer challenges in improving amazing user experiences optimization and visually-appealing websites and web-applications.',
  keywords:"front-end developer, web development, portfolio, React, JavaScript, Ana Arango"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${staatliches.variable} ${raleway.variable}`}>
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body>{children}</body>
    </html>
  )
}