import Image from 'next/image';
import getSchools from './_lib/getSchools';
import { unstable_noStore as noStore } from 'next/cache';

export default async function ViewSchools() {
  noStore();
  const schools = await getSchools();

  return (
    <main>
      <h1 className="text-2xl font-extrabold text-[#45b0fd] text-center py-4 px-2 font-sans">
        Our Affiliates
      </h1>
      {schools.length === 0 && (
        <p className="px-4 py-8">
          Please Retry. The database connection probably timed out due to free
          tier
        </p>
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 gap-8 py-4">
        {schools.map((school) => (
          <li key={school.id}>
            <div className="flex flex-col justify-center max-w-full h-full gap-2 shadow-lg bg-[#a2d8ff23] rounded-lg overflow-hidden hover:shadow-none cursor-pointer">
              <div className="flex-1 flex items-center justify-center overflow-hidden">
                <Image
                  src={`/api/static/schoolImages/${school.image}`}
                  width={400}
                  height={400}
                  alt={school.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col px-4 py-3 gap-3">
                <p className="text-xs font-bold">
                  {school.address}, {school.city}
                </p>
                <p className="text-[#45b0fd] font-medium text-lg">
                  {school.name}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
