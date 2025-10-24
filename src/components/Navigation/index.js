'use client'
import { NavArray } from "@/utils/data"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {

    const path = usePathname()

    return (
        <div className="md:basis-[75%] basis-[100%] m-2 md:m-4 md:justify-end text-[26px] md:text-3xl flex justify-evenly text-gray-500">
            {NavArray.map((item, index) => (
                <Link href={item.link} key={index} className={`font-bold  md:m-4 ${item.link === path || path.includes(item.link + '/') ? "active" : ""} transition duration-300 hover:text-white hover:underline `}>
                    {item.name}
                </Link>
            ))}
        </div>
    )
}

export default Navigation