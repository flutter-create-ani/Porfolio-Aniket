const Contact = () => {
    return (
        <section id="contact" className="bg-[#1B1B1B] rounded-2xl text-[#9C9C9C]">
            <div className="container px-6 py-12 mx-auto">
                <div>
                    <p className="font-medium text-blue-500 font-mono">Contact Me</p>
                    <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl font-mono">
                        Get in touch
                    </h1>
                    <p className="mt-3 text-[#9C9C9C]">I'm always open to connecting.</p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-2xl bg-[#1B1B1B] hover:bg-[#2A2A2A] cursor-pointer transition duration-200 shadow-md p-6 border border-[#2A2A2A]">
                        <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-700">
                            {/* Email Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </span>
                        <h2 className="mt-4 text-lg font-medium text-white font-mono">Email</h2>
                        <p className="mt-2">You can reach me via email.</p>
                        <p className="mt-2 text-blue-500">aniket8227916940@gmail.com</p>
                    </div>

                    <div className="rounded-2xl bg-[#1B1B1B] hover:bg-[#2A2A2A] cursor-pointer transition duration-200 shadow-md p-6 border border-[#2A2A2A]">
                        <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-700">
                            {/* Location Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </span>
                        <h2 className="mt-4 text-lg font-medium text-white font-mono">Address</h2>
                        <p className="mt-2">Find me here:</p>
                        <p className="mt-2 text-blue-500">KIET Group of Institutions, Delhi NCR Uttar Pardesh</p>
                    </div>

                    <div className="rounded-2xl bg-[#1B1B1B] hover:bg-[#2A2A2A] cursor-pointer transition duration-200 shadow-md p-6 border border-[#2A2A2A]">
                        <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-700">
                            {/* Phone Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </span>
                        <h2 className="mt-4 text-lg font-medium text-white font-mono">Phone</h2>
                        <p className="mt-2">Available on call.</p>
                        <p className="mt-2 text-blue-500">+91 81028 56535</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
