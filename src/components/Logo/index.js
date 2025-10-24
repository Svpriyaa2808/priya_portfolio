import Link from "next/link"
import { Uncial_Antiqua } from "next/font/google"

const unicalFont = Uncial_Antiqua({subsets : ["latin"],weight:"400"})

const Logo = () => {

    return (
        <div className={`m-4 basis-[25%] text-center  ${unicalFont.className} text-3xl text-[#B4ADA3] header-hover`}>
            <Link href="/">Priya</Link>
        </div>
    )
}

export default Logo