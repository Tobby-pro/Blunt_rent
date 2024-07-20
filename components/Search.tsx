'use client'
import React from 'react'
import {FaMagnifyingGlass} from 'react-icons/fa6'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion';

const Search = () => {
	const searchParams = useSearchParams()
	const Pathname = usePathname()
	const { replace } = useRouter()
	
	const handleSearch = (searchTerm: string) => {
		const params = new URLSearchParams(searchParams || undefined)
		if (searchTerm) {
			params.set('query', searchTerm)
		}
		else {
			params.delete('query')
		}
replace(`${Pathname}? ${params.toString()}`)
		
	}
	return (
		<div className="relative flex flex-col lg:flex-row justify-center py-10 w-full">
			<div className="w-full lg:w-1/2 flex justify-center items-start">
			<div className="fixed px-3 lg:pl-0 z-10 w-full max-w-md lg:max-w-[36rem]">
		  <label htmlFor="search" className="sr-only">Find a landlord</label>
		  <input
			id="search"
			className="block w-full max-w-md lg:max-w-[36rem] h-12 rounded-xl border border-1 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 py-2 font-medium text-slate-400 transition-colors animate-shimmer outline-none outline-2 placeholder:text-gray-600 placeholder:text-base"
			placeholder="search location, number of rooms, price range."
			 defaultValue={searchParams?.get('query') ?? ''}
			onChange={(e) => {
			  handleSearch(e.target.value);
			}}
		  />
			<FaMagnifyingGlass className="absolute top-1/2 right-[3rem] transform -translate-y-1/2 h-[18px] w-5 text-slate-400 peer-focus:text-gray-900 cursor-pointer" />
			</div>
			</div>
		  <div className="h-screen lg:w-1/2 w-screen dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative flex items-center justify-center">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
		  </div>
		</div>
	  );
}

export default Search