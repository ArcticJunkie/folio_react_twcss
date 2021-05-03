
//components
import HeroImage from './HeroImage';
import HeroImageAlt from './HeroImageAlt';
import TypeWriter from './TypeWriter';


function Landing() {
    return (
        <div className="App bg-gray-50">
            {/* px-8 pt-10 md:px-36 md:pt-12 lg:px-52 lg:pt-16 xl:px-96 xl:pt-32 */}
            <main className="pb-40 flex flex-col space-y-20 justify-between px-8 pt-10 xl:px-52 xl:pt-32   text-gray-800 text-xl font-poppins">

                {/* landing -> hero text */}
                <div className="flex justify-between flex-col space-y-6 xl:space-y-8">
                    <div className="flex flex-col space-y-10">
                        <div className="flex flex-col space-y-20 font-light">
                            <span className="text-2xl xl:text-4xl font-light">Hi, I'm <span className="font-medium">Nav.</span></span>
                            <span className="text-2xl xl:text-4xl">I  {' '}
                                <a href="https://dribbble.com/navs-dribbble" target="_blank" className="group relative"><span className="relative z-20 font-medium group-hover:text-blue-800 ">design</span><i className="absolute opacity-60 z-10 left bottom-1 inset-x-0 bg-blue-300 h-2 lg:h-3 group-hover:h-5 transition-height duration-300 ease-in-out "></i></a>
                                {' '}and{' '}
                                <a href="https://github.com/navs-github" target="_blank" className="group relative"><span className="relative z-20 font-dmono font-medium group-hover:text-blue-800">&lt;develop/&gt;</span><i className="absolute opacity-60 z-10 left bottom-1 inset-x-0 bg-blue-300 h-2 lg:h-3 group-hover:h-5 transition-height duration-300 ease-in-out"></i></a>
                                <TypeWriter /></span>
                        </div>
                    </div>
                </div>


                {/* landing -> image */}
            </main>



        </div >
    );
}

export default Landing;
