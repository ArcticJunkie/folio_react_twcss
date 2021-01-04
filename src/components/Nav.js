

function Nav() {
    return (
        <div className="Nav text-gray-700">
            <nav className="bg-blue-50 flex flex-row items-center justify-between px-8 py-8 md:px-52 md:py-8">
                <div className="font-bold font-mono text-2xl hover:text-blue-700"><a href="#" className="">AV</a></div>
                <ul className="hidden md:flex flex-row justify-evenly space-x-12 font-mono ">
                    <li className="hover:underline hover:text-black"><a href="https://www.linkedin.com/in/nav-verma/" target="_blank">LinkedIn</a></li>
                    <li className="hover:underline hover:text-black"><a href="https://dribbble.com/navs_lists" target="_blank">Dribbble</a></li>
                    <li className="hover:underline hover:text-black"><a href="https://drive.google.com/file/d/1Y_uy5qveuIf9GfGZcfIXKGOIH1DRb_PM/view?usp=sharing" target="_blank">Resume</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
