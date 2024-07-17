'use server';

import dbQuery from '@/app/_lib/query';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

export default async function addSchool(formData) {
  try {
    const data = {};

    formData.forEach((value, key) => (data[key] = value));

    const { name, address, city, state, contact, email } = data;

    const textFields = [
      {
        name,
        address,
        city,
        state,
      },
    ];

    textFields.forEach((field) => validateTextField(field));
    validateContact(contact);
    validateEmail(email);

    const image = await uploadImage(formData.get('image'));

    const fields = [name, address, city, state, contact, image, email];

    await executeQuery(fields);

    return {
      message: 'School Added to the database successfully!',
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

function validateTextField(field) {
  const [key, value] = Object.entries(field);
  if (!value) throw Error(`Invalid ${key}`);
}

function validateContact(contact) {
  if (isNaN(+contact) || (+contact).toString().length !== 10)
    throw Error('Invalid Contact Number!');
}

function validateEmail(email) {
  if (
    !email.match(
      /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+\.[a-z]{1,4}$/
    )
  )
    throw Error('Invalid Email address');
}

async function uploadImage(image) {
  if (!image) throw new Error('No image uploaded');

  try {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const imgName = uuidv4() + image.name;

    const path = join(process.cwd(), 'public/schoolImages', imgName);
    await writeFile(path, buffer);

    return imgName;
  } catch (err) {
    throw Error(
      'Vercel is serverless and hence does not provide facility to store images in filesystem dynamically. Please clone the project to localhost and run to see full functionality.'
    );
  }
}

async function executeQuery(data) {
  const query = `INSERT INTO schools (name, address, city, state, contact, image, email) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const res = await dbQuery(query, data);

  return res;
}
