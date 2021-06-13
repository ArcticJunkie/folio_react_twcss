

function Footer() {
    return (
        <div className="px-8 py-10 xl:px-52 xl:py-36  bg-blue-900 text-white text-xs lg:text-base">
            <div className="flex flex-row space-x-8 xl:space-x-52 2xl:space-x-72 font-dmono">
                <div className="">
                    <div className="text-xl">Abhinav Verma</div>
                    <ul className="mt-2 flex flex-row space-x-6 text-gray-100 text-2xl ">
                        <li className=""><a href="https://www.linkedin.com/in/nav-verma/" className="hover:text-blue-200 transition-colors duration-300 ease-in-out" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a></li>
                        <li className=""><a href="https://dribbble.com/navs-dribbble" className="hover:text-blue-200 transition-colors duration-300 ease-in-out" target="_blank" rel='noreferrer'><i className="fab fa-dribbble-square"></i></a></li>
                        <li className=""><a href="https://github.com/navs-github" className="hover:text-blue-200 transition-colors duration-300 ease-in-out" target="_blank" rel='noreferrer'><i className="fab fa-github-square"></i></a></li>
                    </ul>
                    <div className="mt-8 w-36 lg:w-64">
                        <a href="https://github.com/navs-github/folio_react_twcss" target="_blank" rel='noreferrer'><span className="">website powered by <span className="font-bold text-white">React</span> and <span className="font-bold text-white">Tailwindcss.</span> deployed with <span className="font-bold text-white">Vercel.</span></span></a>
                    </div>
                    <div className="mt-4 text-xs xl:text-sm">
                        © 2022 — Abhinav Verma
                    </div>
                </div>

                <div className="flex flex-row mt-2 xl:mt-0 space-x-8 xl:space-x-16">
                    <div className="flex flex-col space-y-8 lg:space-y-6">
                        <span className="text-blue-100 font-poppins font-base">CONTACT</span>
                        <ul className="flex flex-col space-y-6">
                            <li className="hover:text-blue-300 transition-colors duration-300 ease-in-out"><a href="https://www.linkedin.com/in/nav-verma/" target="_blank" rel='noreferrer'>LinkedIn</a></li>
                            <li className="hover:text-blue-300 transition-colors duration-300 ease-in-out"><a href="mailto:nav.verma.work@gmail.com" target="_blank" rel='noreferrer'>Email</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-8 lg:space-y-6">
                        <span className="text-blue-100 font-poppins font-base">MORE</span>
                        <ul className="flex flex-col space-y-6">
                            <li className="hover:text-blue-300 transition-colors duration-300 ease-in-out"><a href="https://dribbble.com/navs-dribbble" target="_blank" rel='noreferrer'>Dribbble</a></li>
                            <li className="hover:text-blue-300 transition-colors duration-300 ease-in-out"><a href="https://github.com/navs-github" target="_blank" rel='noreferrer'>GitHub</a></li>
                            <li className="hover:text-blue-300 transition-colors duration-300 ease-in-out"><a href=" https://drive.google.com/file/d/1Otetlcvefv3eI3Q6Amucy05LpFxOnY5a/view?usp=sharing" target="_blank">Resume</a></li>
                        </ul>
                    </div>
                </div>

            </div >
        </div >
    );
}

export default Footer;
