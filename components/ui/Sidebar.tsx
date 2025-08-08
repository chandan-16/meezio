'use client'

import React from 'react'

import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Sidebar = () => {

    const pathname = usePathname();

  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-gray-900 p-5 pt-0 text-white max-sm:hidden lg:w-[264px]'>
        <div className='flex flex-1 flex-col gap-2 mt-30 mr-5px'>
            {sidebarLinks.map((link) => {
                const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
                return(
                    <Link href={link.route} key={link.label} className={cn('flex gap-4 w-[220px] items-center p-4 rounded-lg justify-start', {'bg-blue-600': isActive})} >
                        <Image src={link.imgUrl} alt={link.label} width={24} height={24} />
                        <p className='text-lg font-semibold max-lg:hidden'>
                            {link.label}
                        </p>
                    </Link>
                )
            })}
        </div>
    </section>
  )
}

export default Sidebar;