import dbQuery from '@/app/_lib/query';

export default async function getSchools() {
  const query = `SELECT * FROM schools`;

  const data = await dbQuery(query);

  if (data?.length) {
    const [rows] = data;
    return rows;
  }

  return [];
}
