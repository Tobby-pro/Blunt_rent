
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
	  <header className = "fixed top-0 w-full z-50 h-14 inset-y-6 backdrop-blur-md bg-opacity-50 py-8 lg:py-5">
		  <nav className = "flex items-center justify-between my-[-10px] p-4 lg:p-8 absolute">
			  <div className="flex flex-1">
				  <Link href="/search">
					  <Image
						  src="/images/bluntrent.svg"
						  alt="bluntrent"
						  width={100}
						  height={100}
						  priority
					  />
				  </Link>
			  </div> 
		  </nav>
</header>
  )
}

export default Header