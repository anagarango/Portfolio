import fs from 'fs';

export default function handler(req, res) {
  const folderPath = 'public/HorizontalLogos'; // Replace with the actual path to your folder

  try {
    const fileNames = fs.readdirSync(folderPath);
    res.status(200).json({ fileNames });
  } catch (error) {
    console.error('Error reading folder:', error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
  
}
