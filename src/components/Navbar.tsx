"use client";
import Image from "next/image";
import { useBreakpoint } from "../utils/useBreakPoint";
import {useLocale, useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher';


export default function Navbar() {
  const isSmallOrMedium = useBreakpoint(1023); // Tailwind's md and below
    const t = useTranslations('nav');
  const locale = useLocale()

  return (
    <div className="relative group">
      {/* Invisible hover zone */}
      {/* <div className="absolute top-0 left-0 w-full h-10 z-30"></div> */}

      <header
        className="h-10 
          fixed
          absolute top-0 left-0 z-40
          w-full
          bg-black/40
          backdrop-blur-sm
          flex justify-between items-center
          text-white py-10 px-6 md:px-32
        "
      >
        <div className="w-[120px] h-[120px] rounded-full bg-white p-1 overflow-hidden mt-4">
          <Image
            src="/logo1.png"
            alt="Company Logo"
            width={120}
            height={120}
            className="object-cover rounded-full"
            priority
          />
        </div>

        {/* Desktop nav links */}
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 w-[80px] hover:bg-gradient-to-r from-black to-orange-500 hover:text-white rounded-md whitespace-nowrap *:transition-all">{t('home')}</li>
          <li className="p-3 w-[80px] hover:bg-gradient-to-r from-black to-orange-500 hover:text-white rounded-md whitespace-nowrap transition-all">{t('about')}</li>
          <li className="p-3 w-[80px] hover:bg-gradient-to-r from-black to-orange-500 hover:text-white rounded-md whitespace-nowrap transition-all">{t('contact')}</li>
          <li className="p-3 w-[80px] hover:bg-gradient-to-r from-black to-orange-500 hover:text-white rounded-md whitespace-nowrap transition-all">{t('team')}</li>
        </ul>

        {/* Mobile menu icon */}
        {isSmallOrMedium && (
          <i className="bx bx-menu text-white text-4xl cursor-pointer"></i>
        )}
        <div className="hidden md:flex items-center space-x-2">
            <LanguageSwitcher defaultValue={locale} label="Language"  />
          </div>
      </header>
    </div>
  );
}
