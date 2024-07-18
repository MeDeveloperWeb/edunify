'use client';

export default async function getSchools() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/view-schools`, {
    // On demand validation is best but due to server being free host and the images serving from server
    // Images will break with on demand caching
    cache: 'no-store',
  });

  const data = await res.json();

  return data;
}
