import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRESQL_URI,
});

console.log('POSTGRESQL_URI:', process.env.POSTGRESQL_URI);

export default pool;