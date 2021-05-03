

function Footer() {
    return (
        <div className="px-8 py-10 xl:px-52 xl:py-36 mt-36  bg-blue-900 text-white text-xs lg:text-base">
            <div className="flex flex-row space-x-8 lg:space-x-36 font-dmono">
                <div className="w-36 lg:w-64">
                    <span className="">website powered by <span className="font-bold text-white">React</span> and <span className="font-bold text-white">Tailwindcss.</span> deployed with <span className="font-bold text-white">Vercel.</span></span>
                </div>

                <div className="flex flex-col space-y-4 lg:space-y-6">
                    <span className="text-blue-300 font-poppins font-base">Contact</span>
                    <ul className="flex flex-col space-y-2 lg:space-y-4">
                        <li className="hover:text-blue-300 transition-colors duration-300 ease-in-out"><a href="https://www.linkedin.com/in/nav-verma/" target="_blank">LinkedIn</a></li>
                        <li className="hover:text-blue-300 transition-colors duration-300 ease-in-out"><a href="mailto:nav.verma.work@gmail.com" target="_blank">Email</a></li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-4 lg:space-y-6">
                    <span className="text-blue-300 font-poppins font-base">Works</span>
                    <ul className="flex flex-col space-y-2 lg:space-y-4">
                        <li className="hover:text-blue-300 transition-colors duration-300 ease-in-out"><a href="https://dribbble.com/navs-dribbble" target="_blank">Dribbble</a></li>
                        <li className="hover:text-blue-300 transition-colors duration-300 ease-in-out"><a href="https://github.com/navs-github" target="_blank">GitHub</a></li>
                        <li className="hover:text-blue-300 transition-colors duration-300 ease-in-out"><a href=" https://drive.google.com/file/d/1Otetlcvefv3eI3Q6Amucy05LpFxOnY5a/view?usp=sharing" target="_blank">Resume</a></li>

                    </ul>
                </div>

            </div >
        </div >
    );
}

export default Footer;
