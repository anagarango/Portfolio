import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises'; // Use Node.js's built-in fs/promises module

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const pathname = searchParams.get('url')
  // console.log(pathname)
  

  const filePath = 'public/data/project-list.json';
  // http://localhost:3000/api/projects?url=Rooty

  try {
    const fileContent = await readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    var chosenProject = ""
    for(var x = 0; x < data.length; x++){
      if(pathname == data[x].name){
        chosenProject = data[x]
      }
    }
    return NextResponse.json(chosenProject);
  } catch (error) {
    console.error('Error reading JSON:', error);
    return NextResponse.error(error);
  }
}