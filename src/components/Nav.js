

function Nav() {
    return (
        <div className="Nav text-gray-800 ">
            <nav className="bg-gray-50 flex flex-row items-center justify-between px-8 pt-10 xl:px-52 xl:pt-16">
                <div className="font-bold font-dmono text-2xl md:text-3xl xl:text-4xl hover:text-blue-700 mr-16 md:mr-52"><a href="https://navs-portfolio.vercel.app/" className="" rel='noreferrer'>AV</a></div>
                <ul className="hidden flex-row justify-evenly space-x-12 font-poppins  text-base xl:text-lg">
                    <li className="hover:underline hover:text-black"><a href="https://www.linkedin.com/in/nav-verma/" target="_blank" rel='noreferrer'>LinkedIn</a></li>
                    <li className="hover:underline hover:text-black"><a href="https://dribbble.com/navs-dribbble" target="_blank" rel='noreferrer'>Dribbble</a></li>
                    <li className="hover:underline hover:text-black"><a href="https://github.com/navs-github" target="_blank" rel='noreferrer'>GitHub</a></li>
                    <li className="hover:underline hover:text-black"><a href="https://drive.google.com/file/d/1Otetlcvefv3eI3Q6Amucy05LpFxOnY5a/view?usp=sharing" target="_blank" rel='noreferrer'>Resume</a></li>
                </ul>
                <ul className="flex flex-row items-center justify-evenly space-x-8 xl:space-x-12 text-gray-600 text-2xl md:text-3xl ">
                    <li className=""><a href="https://www.linkedin.com/in/nav-verma/" className="hover:text-blue-700 transition-colors duration-300 ease-in-out" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a></li>
                    <li className=""><a href="https://dribbble.com/navs-dribbble" className="hover:text-blue-700 transition-colors duration-300 ease-in-out" target="_blank" rel='noreferrer'><i className="fab fa-dribbble-square"></i></a></li>
                    <li className=""><a href="https://github.com/navs-github" className="hover:text-blue-700 transition-colors duration-300 ease-in-out" target="_blank" rel='noreferrer'><i className="fab fa-github-square"></i></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
