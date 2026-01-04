'use client';

import Image from "next/image";
import Link from 'next/link';
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-[80vh] md:min-h-[90vh] flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-5">
          {/* <h1 className="text-8xl md:text-9xl font-black text-white tracking-tighter animate-in fade-in duration-700">
            30
          </h1> */}
          <Image src={"/logo.png"} alt="UNIT30 Records - Logo" width={300} height={200} className="mx-auto md:h-[300px] md:w-[400px]"/>
          <p className="text-lg font-black italic md:text-xl text-[#FAFAFA] tracking-widest">
            RECORDS
          </p>
        </div>

        {/* <div className="pt-8">
          <Link
            href="/releases"
            className="inline-block px-8 py-3 text-sm font-medium tracking-wide text-accent-foreground bg-transparent hover:text-accent transition-colors duration-300 rounded-sm"
          >
            EXPLORE RECORDS →
          </Link>
        </div> */}
        <div className="absolute bottom-16 md:bottom-12 left-1/2 -translate-x-1/2 z-10 animate-fade-in">
          <Link
            href="/releases"
            className="text-sm font-semibold tracking-widest text-muted-foreground/70 hover:text-primary hover:font-semibold transition-colors group"
          >
            💜 explore
            <span className="inline-block align-middle ml-1 transition-transform group-hover:translate-x-0.5"><FaLongArrowAltRight /></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
