// pages/api/data.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Define the path to your JSON file
  const filePath = path.join(process.cwd(), 'data', '../src/data.js');

  // Read the JSON file
  const jsonData = fs.readFileSync(filePath, 'utf8');

  // Parse the JSON data
  const data = JSON.parse(jsonData);

  console.log(data)
  // Send the JSON data as a response
  res.status(200).json(data);
}