import { EnvelopeIcon,PhoneIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMediaIcons = () => {
    return (
        <>
        <div className='flex mx-6'>
                <EnvelopeIcon className="icons" />
                <a href="mailto:svpriyaa2808@gmail.com" className='icons-text '>svpriyaa2808@gmail.com</a>
            </div>
        
            <div className='flex mx-6' >
                <PhoneIcon className="icons"  />    
                <p className='icons-text ' >+46 761577348</p>
            </div>

            <div className='flex mx-6'>
                <FaGithub className='icons'/>
                <a href='https://github.com/Svpriyaa2808' className='icons-text'>Priyaa's Github</a>
            </div>

            <div className='flex mx-6'>
                <FaLinkedin className='icons'/>
                <a href='https://www.linkedin.com/in/priyadharshini-seetharam/' className='icons-text'>LinkedIn</a>
            </div>
        </>
    )
}

export default SocialMediaIcons