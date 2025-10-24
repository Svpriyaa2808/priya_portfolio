
import SocialMediaIcons from '@/components/SocialMediaIcons';
import ConnectImage from '../../../public/images/connect.jpg'
import Image from 'next/image';


const ContactPage = () => {
    return (
        <div className='m-4 my-8 text-white grow' >
            <div className='flex gap-6 mx-4'>
                <div className='m-4 block lg:flexbasis-[40%] p-4'>
                    <h3 className='text-6xl font-bold mb-8'>Let's <span className='text-[#B4ADA3]'>Connect</span>.</h3>
                    <p className='my-6 text-xl'>Excited to step into the world of frontend development! If you have an internship opportunities where 
                        I can contribute and learn from real-world projects, I’d love to hear from you.</p>
                </div>
                <div className="hidden lg:flex basis-[60%] m-4 justify-center">
                    <div className="w-64 h-64 my-8 overflow-hidden rounded-full">
                        <Image src={ConnectImage} alt="connect_image" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
            <SocialMediaIcons />
        </div>
    )
}

export default ContactPage