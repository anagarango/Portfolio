
import React from 'react';
import { Staatliches, Raleway } from 'next/font/google';
import '../../../styles/globals.css';

const staatliches = Staatliches({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-staatliches',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export async function generateMetadata({ params, searchParams, props }, parent) {
  var data
  try {
    const response = await fetch(`https://anagarango.ca/api/projects?url=${params.project}`)
    data = await response.json();
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
  return {
    title: data.name,
    description: data.preview,
    keywords:"front-end developer, web development, portfolio, React, JavaScript, Ana Arango"
  }
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