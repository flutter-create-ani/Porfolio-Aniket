import {
    AtSignIcon,
    EarthIcon,
    FacebookIcon,
    HeadsetIcon,
    LinkedinIcon,
    TwitterIcon,
    InstagramIcon
} from 'lucide-react'
import { Link } from 'react-scroll';


const socialLinks = [
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/aniket-kumar-545282228/',
        icon: <LinkedinIcon />,
    },
    {
        name: 'Website',
        link: 'https://instagram.com/ani_ec25',
        icon: <InstagramIcon />,
    },
]

const description =
    'I build scalable web and mobile apps using Flutter, React, and Node.js — from smooth front-end experiences to robust backend systems. Whether it’s a full-stack web app or a cross-platform mobile app, I turn ideas into production-ready products';

const Footer = () => {
    return (
        <footer className="relative z-50 bg-[#1B1B1B]">
            <div className="flex flex-col items-center px-4 py-12">
                {/* app logo */}
                <div>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="mb-8 flex items-center justify-center gap-5 text-white cursor-pointer"
                    >
                        <img
                            src="https://res.cloudinary.com/dyvkdwzcj/image/upload/v1709055594/logo-1_vo1dni.png"
                            className="h-8"
                            alt="Logo"
                        />
                        <span className="text-3xl font-semibold tracking-wider">Aniket Kumar</span>
                    </Link>
                    <p className="max-w-xl text-center text-lg font-medium text-white">{description}</p>
                </div>

                {/* social links */}
                <div className="mt-8">
                    <span className="mb-6 block text-center text-lg font-medium text-[#767E94]">
                        Follow Us
                    </span>
                    <ul className="flex items-center gap-6">
                        {socialLinks.map(({ name, icon, link }) => (
                            <li key={name}>
                                <a
                                    href={link}
                                    title={name}
                                    className="text-white hover:text-[#767e94]"
                                    target="_blank"
                                >
                                    {icon}
                                </a>
                                <span className="sr-only">{name} account</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* email */}
                <div className="mb-2 mt-6 flex items-center gap-2 text-white">
                    <AtSignIcon size={16} />
                    <span className="text-lg font-medium">aniket8227916940@gmail.com.com</span>
                </div>

                {/* call to action */}
                <div className="mt-8">
                    <a
                        href="https://calendly.com/aniket-2125ec1117-kiet/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            type="button"
                            className="flex items-center gap-2 rounded-lg bg-gray-800 px-5 py-2.5 text-base font-semibold text-sky-100 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-sky-600 hover:cursor-pointer"
                        >
                            <HeadsetIcon size={20} />
                            <span>Schedule a Call</span>
                        </button>
                    </a>

                </div>
            </div>

            {/* about author or app/copyrights */}
            <div className="bg-[#2E3447]">
                <div className="px-3 py-3 text-center">
                    <span className="text-[#767E94]">
                        Coded with 💙 by{' '}
                        <a
                            href="https://www.linkedin.com/in/abdulbasitprofile/"
                            target="_blank"
                            className="text-white"
                        >
                            Aniket Kumar{' '}
                        </a>
                        From KIET Group Of Institutions
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer