import fs from 'fs';
import path from 'path';

import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const pathname = searchParams.get('url')
  // console.log(pathname)
  const filePath = path.join(process.cwd(), 'public/data', 'project-list.json'); // Replace 'data.json' with your JSON file name
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  

  // const filePath = 'public/data/project-list.json';
  // http://localhost:3000/api/projects?url=Rooty

  try {
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