'use client';

export default async function addSchool(formData) {
  try {
    // Check if server is up
    await fetch(process.env.NEXT_PUBLIC_API_URL, { cache: 'no-store' });
    // Not required usually

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-school/`, {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    if (data.error)
      return {
        message: data.error,
        type: 'error',
      };

    return {
      message: data.message,
      type: 'success',
    };
  } catch (error) {
    console.log(error);
    return {
      message: error.message,
      type: 'error',
    };
  }
}
