import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getBackgroundColor } from "@/utils/getClass";

const Header = () => {
  const bgColor = getBackgroundColor('tertiary');
  return (
    <header className={`flex items-center w-full h-16 fixed top-0 left-0 right-0 z-10 ${bgColor}`}>
      <Link href={'/'}>
        <Image src={'/logo.png'} alt="" width={200} height={56} />
      </Link>
    </header>
  )

}

export default Header;