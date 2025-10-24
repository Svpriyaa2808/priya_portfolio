'use client'
import { NavArray } from "@/utils/data"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {

    const path = usePathname()

    return (
        <div className="basis-[75%] hidden md:block m-4 text-right text-3xl text-gray-500">
            {NavArray.map((item, index) => (
                <Link href={item.link} key={index} className={`font-bold m-4 ${item.link === path || path.includes(item.link + '/') ? "active" : ""} transition duration-300 hover:text-white hover:underline `}>
                    {item.name}
                </Link>
            ))}
        </div>
    )
}

export default Navigation