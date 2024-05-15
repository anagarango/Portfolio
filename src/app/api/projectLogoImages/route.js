import fs from 'fs';
import path from 'path';

import { NextResponse } from 'next/server';

// export async function GET() {
//   const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
//   const res = await fetch(DATA_SOURCE_URL)
//   const todos = await res.json()
//   return NextResponse.json(todos)
// }

export async function GET() {
  const folderPath = path.join(process.cwd(), 'public/HorizontalLogos');

  // console.log('Current working directory:', process.cwd());
  // console.log('Resolved folder path:', folderPath);

  try {
    const fileNames = fs.readdirSync(folderPath)
    const horizontalLogosImages = []
      for(var x = 0; x < fileNames.length; x++){
        if(fileNames[x] !== ".DS_Store"){
          horizontalLogosImages.push(fileNames[x])
        }
      }
    return NextResponse.json(horizontalLogosImages)
  } catch (error) {
    console.error('Error reading folder:', error);
    return NextResponse.json('there is an error', error)
  }
}