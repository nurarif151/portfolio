import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const Sidebar = () => {
    return (
        <div>
            <img
                src="https://media.licdn.com/dms/image/C5603AQGZMW_2zYv4ng/profile-displayphoto-shrink_200_200/0/1661250632171?e=1681344000&v=beta&t=ECi8S7aS4QCWm4SLzrgvwQ1f4fzQBSeMhk2Ca-jF2kc"
                alt="arif-profile"
                className='mx-auto w-32 h-32 rounded-full'

            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
                <span>NUR </span>
                ARIF</h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Web Developer</p>
            <a className='flex justify-center px-2 py-1 my-3 bg-gray-200 rounded-full item-center'
                href=''
                download='name'
            ><GiTie className='w-6 h-6' />Download Resume</a>

            {/* Social icon */}
            <div className='flex justify-around mx-auto my-5 w-9/12 md:w-full'>
                <a href="#"><AiFillGithub className='w-8 h-8 cursor-pointer text-black-500' /></a>
                <a href="#"><AiFillLinkedin className='w-8 h-8 text-blue-500 cursor-pointer' /></a>
                <a href="#"><AiFillYoutube className='w-8 h-8 text-red-500 cursor-pointer' /></a>
            </div>

            {/* Address */}

            <div className='py-4 my-5 bg-gray-200'
                style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className='flex justify-center items-center space-x-2'><GoLocation />
                    <span> Yogyakarta, Indonesia</span>
                </div>
                <p className='my-2'>nurarif0151@gmail.com</p>

            </div>
            {/* Email Button */}
            <button
                className='py-2 my-2 w-8/12 text-white bg-gradient-to-r to-blue-400 rounded-full from-blue'
                onClick={() => window.open('mailto:nurarif0151@gmail.com')}
            >Email Me</button>
            <button className='py-2 my-2 w-8/12 text-white bg-gradient-to-r to-blue-400 rounded-full from-blue'>Toggle  Theme</button>

        </div>
    )
}
export default Sidebar