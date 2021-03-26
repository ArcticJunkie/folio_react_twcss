

function Nav() {
    return (
        <div className="Nav text-gray-700">
            <nav className="bg-blue-50 flex flex-row items-center justify-between px-8 py-8 md:px-36 lg:px-52 md:py-8">
                <div className="font-bold font-dmono text-2xl xl:text-3xl hover:text-blue-700 mr-16 md:mr-52"><a href="#" className="">AV</a></div>
                <ul className="hiddenmd:flex flex-row justify-evenly space-x-12 font-dmono  text-base xl:-text-lg">
                    <li className="hover:underline hover:text-black"><a href="https://www.linkedin.com/in/nav-verma/" target="_blank">LinkedIn</a></li>
                    <li className="hover:underline hover:text-black"><a href="https://dribbble.com/navs-dribbble" target="_blank">Dribbble</a></li>
                    <li className="hover:underline hover:text-black"><a href="https://github.com/navs-github" target="_blank">GitHub</a></li>
                    <li className="hover:underline hover:text-black"><a href="https://drive.google.com/file/d/1Otetlcvefv3eI3Q6Amucy05LpFxOnY5a/view?usp=sharing" target="_blank">Resume</a></li>
                </ul>
                <ul className="flex md:hidden flex-row items-center justify-evenly space-x-8 text-gray-600 text-2xl">
                    <li className=""><a href="https://www.linkedin.com/in/nav-verma/" className="" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                    <li className=""><a href="https://dribbble.com/navs-dribbble" className="" target="_blank"><i class="fab fa-dribbble-square"></i></a></li>
                    <li className=""><a href="https://github.com/navs-github" className="" target="_blank"><i class="fab fa-github-square"></i></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
