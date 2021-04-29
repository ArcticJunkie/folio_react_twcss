

function Footer() {
    return (
        <div className="px-8 py-4 md:px-36 md:py-5 lg:px-52 lg:py-10 xl:px-96 xl:pt-32 bg-blue-50 text-gray-700 text-xs lg:text-base">
            <div className="flex flex-row space-x-8 lg:space-x-36">
                <div className="w-36 lg:w-64">
                    <span className="">website powered by <span className="font-bold text-gray-900">React</span> and <span className="font-bold text-gray-900">Tailwindcss.</span> deployed with <span className="font-bold text-gray-900">Vercel.</span></span>
                </div>

                <div className="flex flex-col space-y-2 lg:space-y-4">
                    <span className="text-gray-900">Contact</span>
                    <ul className="flex flex-col space-y-2 lg:space-y-4">
                        <li className="hover:underline hover:text-black"><a href="https://www.linkedin.com/in/nav-verma/" target="_blank">LinkedIn</a></li>
                        <li className="hover:underline hover:text-black"><a href="mailto:nav.verma.work@gmail.com" target="_blank">Email</a></li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-2 lg:space-y-4">
                    <span className="text-gray-900">Works</span>
                    <ul className="flex flex-col space-y-2 lg:space-y-4">
                        <li className="hover:underline hover:text-black"><a href="https://dribbble.com/navs-dribbble" target="_blank">Dribbble</a></li>
                        <li className="hover:underline hover:text-black"><a href="https://github.com/navs-github" target="_blank">GitHub</a></li>
                        <li className="hover:underline hover:text-black"><a href="https://drive.google.com/file/d/1Otetlcvefv3eI3Q6Amucy05LpFxOnY5a/view?usp=sharing" target="_blank">Resume</a></li>

                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Footer;
