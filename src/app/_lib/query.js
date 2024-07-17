'use server';

import mysql from 'mysql2/promise';

const pool = mysql.createPool(process.env.DB_URI);

export default async function dbQuery(...args) {
  try {
    pool.getConnection();
    const data = await pool.execute(...args);
    pool.releaseConnection();
    return data;
  } catch (error) {
    console.log(error);
  }
}
