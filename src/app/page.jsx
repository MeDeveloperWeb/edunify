'use client';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import wave from '@/assets/wave.svg';
import Link from 'next/link';

export default function Home() {
  return (
    <main
      className="flex-1 flex px-8 justify-center items-center flex-wrap"
      style={{
        background: `url(${wave.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '90% 100%',
        backgroundSize: 'cover',
      }}
    >
      <div className="h-full xl:flex-1 pr-8">
        <Image src={logo} alt="" className="max-h-[600px] w-auto float-right" />
      </div>
      <div className="flex-1 -mt-[20vh] px-8">
        <div className="flex flex-col gap-16">
          <div>
            <p className="text-[2rem] lg:text-[2.5rem] text-[#45b0fd] font-extrabold">
              At EdUnify,
            </p>
            <p className="text-[2.5rem] lg:text-[2.8rem] xl:text-[3rem] font-sans font-bold text-slate-800 justify-around">
              We help you empower Education
            </p>
          </div>
          <div className="w-full px-1 flex gap-8 flex-wrap">
            <Link
              href={'/join'}
              className="bg-[#45b0fd] text-white text-lg py-2 px-4 rounded-md shadow-md font-medium hover:shadow-none"
            >
              Be our Partner
            </Link>
            <Link
              href={'/affiliates'}
              className="box-content border-2 border-solid border-white text-white bg-[#a2d9ff] text-lg py-2 px-4 rounded-md shadow-md font-medium hover:shadow-none"
            >
              View All Affiliates
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
