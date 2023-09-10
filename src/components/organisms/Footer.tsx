import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getBackgroundColor, getBorderColor } from "@/utils/getClass";

const Footer = () => {
  const bgColor = getBackgroundColor('white');
  const borderColor = getBorderColor('primary', 'top');
  return (
    <footer className={`flex items-center justify-between	 w-full h-12 p-2 fixed bottom-0 left-0 right-0 z-10 ${bgColor} ${borderColor}`}>
      <Link href={'/'}>
        <Image src={'/icon/house_line.svg'} alt="" width={24} height={24}/>
      </Link>
      <Link href={'/'}>
        <Image src={'/icon/add_line.svg'} alt="" width={24} height={24}/>
      </Link>
      <Link href={'/'}>
        <Image src={'/icon/me_line.svg'} alt="" width={24} height={24}/>
      </Link>
    </footer>
  )

}

export default Footer;