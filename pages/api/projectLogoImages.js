import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const folderPath = path.join(process.cwd(), 'public/HorizontalLogos');

  console.log('Current working directory:', process.cwd());
  console.log('Resolved folder path:', folderPath);

  try {
    const fileNames = fs.readdirSync(folderPath);
    res.status(200).json({ fileNames });
  } catch (error) {
    console.error('Error reading folder:', error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
}
