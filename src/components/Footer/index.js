import { EnvelopeIcon} from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
       <footer className="text-white flex justify-between mt-4 p-2 shadow-[4px_0_16px_rgba(255,255,255,0.5)]">
            <p className='m-2 p-2 pt-4 text-xl'>&copy; 2025.</p>
            <div className='flex gap-0 md:gap-1'>
                <a href="mailto:svpriyaa2808@gmail.com" className='icons-text header-hover'><EnvelopeIcon className="icons h-10 w-10 header-hover" /></a>
                <a href='https://github.com/Svpriyaa2808' className='icons-text header-hover'><FaGithub className='icons h-10 w-10 header-hover'/></a>
                <a href='https://www.linkedin.com/in/priyadharshini-seetharam/' className='icons-text header-hover'> <FaLinkedin className='icons h-10 w-10 header-hover'/></a>
            </div>
       </footer>
    )
}

export default Footer