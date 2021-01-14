

function Nav() {
    return (
        <div className="Nav text-gray-700">
            <nav className="bg-yellow-50 flex flex-row items-center justify-between px-8 py-8 md:px-52 md:py-8">
                <div className="font-bold font-mono text-2xl hover:text-blue-700"><a href="#" className="">AV</a></div>
                <ul className="hidden md:flex flex-row justify-evenly space-x-12 font-mono ">
                    <li className="hover:underline hover:text-black"><a href="https://www.linkedin.com/in/nav-verma/" target="_blank">LinkedIn</a></li>
                    <li className="hover:underline hover:text-black"><a href="https://dribbble.com/navs_lists" target="_blank">Dribbble</a></li>
                    <li className="hover:underline hover:text-black"><a href="https://github.com/navs-github" target="_blank">GitHub</a></li>
                    <li className="hover:underline hover:text-black"><a href="https://drive.google.com/file/d/1g5lcxMaumEyiMUWeHU7QqDgkpzPcKqf0/view?usp=sharing" target="_blank">Resume</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
