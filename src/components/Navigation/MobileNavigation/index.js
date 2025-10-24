'use client'
import Hamburger from "hamburger-react"
import { NavArray } from "@/utils/data"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
const MobileNavigation = () => {
    const [isOpen, setOpen] = useState(false)

    const handleClick = () => {
        
     setOpen(false) 
    }
    const path = usePathname()


    return (
        <div className="block md:hidden text-right m-4 text-3xl text-white">
            <Hamburger  toggled={isOpen} toggle={setOpen} />
            {isOpen && 
            NavArray.map((item, index) => (
                <div className="text-center" key={index}>
                <Link href={item.link} onClick={handleClick} className={`font-bold text-[18px] m-4 ${item.link === path || path.includes(item.link + '/') ? "active" : ""} transition duration-300  hover:text-white hover:underline `}>
                    {item.name}
                </Link>
                </div>
            ))
        }
        </div>
    )
}

export default MobileNavigation