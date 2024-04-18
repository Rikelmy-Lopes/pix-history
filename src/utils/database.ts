import { readFile, writeFile } from 'fs/promises';
// import { join } from 'path';

export async function readDB() {
  // const filePath = join(__dirname, '../db/database.json');
  const filePath = './src/db/database.json';
  const data = await readFile(filePath, { encoding: 'utf-8' });
  if (!data) {
    return [];
  }
  return JSON.parse(data) as unknown[];
}
  
async function writeDB(value: unknown[]) {
  // const filePath = join(__dirname, '../db/database.json');
  const filePath = './src/db/database.json';
  await writeFile(filePath, JSON.stringify(value), { encoding: 'utf-8' });
}


export async function updateDB(value: unknown[]) {
  const data = await readDB();
  await writeDB([...value, ...data]);
}