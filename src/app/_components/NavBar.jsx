'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const path = usePathname();

  return (
    <nav className={path === '/' ? 'py-1' : 'bg-[#a2d8ff23] py-1'}>
      <div className="flex justify-between items-center px-4 py-2">
        <Link
          href={'.'}
          className="text-3xl font-semibold font-sans text-[#45b0fd]"
        >
          EdUnify
        </Link>

        <ul className="flex gap-4">
          <li>
            <Link href={'/join'} className="text-blue-400">
              Join Us
            </Link>
          </li>
          <li>
            <Link href={'/affiliates'} className="text-blue-400">
              Our Affiliates
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
