import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Link href={'/'}>
        <Image src={'/logo.png'} alt="" width={200} height={56} />
      </Link>
    </header>
  )

}

export default Header;