
import React from 'react'
		
const MagicButton = ({ title, icon, position, handleClick, otherClasses }: {
	title: string, icon: React.ReactNode, position: string, handleClick?: () => void; otherClasses?: string

 }) => {
		  return (
			  <div>
				  <button className={`relative inline-flex h-12 lg:w-56 animate-shimmer items-center justify-center rounded-lg border-[0.1px] border-violet-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors lg:text-2xl focus:outline-none gap-2 ${otherClasses}`}>
					  {position === 'left' && icon}
					  {title}
					  {position === 'right' && icon}
        </button>
  
			</div>
		  )
		}
		
		export default MagicButton
        
      