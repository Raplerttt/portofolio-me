import dotenv from 'dotenv';
dotenv.config();

import { createProjectsTable } from '../models/Project.js';

console.log('POSTGRESQL_URI:', process.env.POSTGRESQL_URI);

async function init() {
  try {
    await createProjectsTable();
    console.log('Tabel projects berhasil dibuat atau sudah ada.');
    process.exit(0);
  } catch (error) {
    console.error('Gagal membuat tabel projects:', error);
    process.exit(1);
  }
}

init();
