'use client';

import { useForm } from 'react-hook-form';
import addSchool from './_lib/addSchool';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function AddSchool() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const fileInput = useRef(null);

  const textFields = ['name', 'address', 'city', 'state'];

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, val]) => formData.append(key, val));

    formData.append('image', fileInput.current.files[0]);

    const res = await addSchool(formData);

    if (res.type === 'error') {
      alert(res.message);
    } else {
      alert('School added Successfully!');
      router.push('./');
    }
  };

  return (
    <main className="flex-1 flex justify-center py-4 lg:py-12 px-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 shadow-xl h-max px-4 md:px-8 py-6 bg-[#a2d8ff23] rounded-lg"
      >
        <p className="text-xl text-center font-semibold font-sans">
          Register Your Institution
        </p>
        {textFields.map((field, i) => (
          <div key={i} className="flex flex-col gap-2">
            <label htmlFor={field} className="font-medium text-blue-950">
              {capitalize(field)}
            </label>
            <input
              id={field}
              {...register(field, { required: true })}
              className="rounded-md border border-solid p-2"
            />
            {errors[field]?.type === 'required' && (
              <p role="alert" className="text-red-500 text-xs italic">
                {capitalize(field)} is required!
              </p>
            )}
          </div>
        ))}
        <div className="flex flex-col gap-2">
          <label htmlFor="contact" className="font-medium text-blue-950">
            Contact Number
          </label>
          <input
            className="rounded-md border border-solid p-2"
            type="tel"
            {...register('contact', {
              required: true,
              pattern: {
                value: /[0-9]+/,
                message: 'Invalid Contact Number!',
              },
            })}
          />
          {errors.contact && (
            <p role="alert" className="text-red-500 text-xs italic">
              {errors.contact?.type === 'required'
                ? 'Contact is required'
                : errors.contact.message}
              !
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="image">Image</label>
          <input type="file" ref={fileInput} required />
          {/* {errors.image?.type === 'required' && (
            <p role="alert" className="text-red-500 text-xs italic">
              Image is required!
            </p>
          )} */}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="rounded-md border border-solid p-2"
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email?.type === 'required' && (
            <p role="alert" className="text-red-500 text-xs italic">
              Email is required!
            </p>
          )}
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Submit"
            className="px-6 py-2 rounded-md shadow-md bg-[#45b0fd] text-white font-medium text-md"
          />
        </div>
      </form>
    </main>
  );
}

function capitalize(string) {
  return string.substring(0, 1).toUpperCase() + string.substring(1);
}
