import React from 'react';
import { useInView } from 'react-intersection-observer';

//components
import TypeWriter from './TypeWriter';


function Intro() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });

    return (
        <div className="">
            <main ref={ref} style={{ opacity: inView ? 1 : 0 }} className="pb-40 flex flex-col space-y-20 px-8 pt-16 xl:px-52 xl:pt-32 text-gray-800 text-xl font-poppins transition-all duration-1000 ease-in">
                <div className="flex justify-between flex-col space-y-6 xl:space-y-8">
                    <div className="flex flex-col space-y-10">
                        <div className="flex flex-col space-y-20 font-light">
                            <span className="text-2xl xl:text-4xl font-light">Hi, I'm <span className="font-medium">Nav.</span></span>
                            <span className="text-2xl xl:text-4xl">I  {' '}
                                <a href="https://dribbble.com/navs-dribbble" target="_blank" rel='noreferrer' className="group relative"><span className="relative z-20 font-medium group-hover:text-blue-800 ">design</span><i className="absolute opacity-60 z-10 left bottom-1 inset-x-0 bg-blue-300 h-2 lg:h-3 group-hover:h-5 transition-height duration-300 ease-in-out "></i></a>
                                {' '}and{' '}
                                <a href="https://github.com/navs-github" target="_blank" rel='noreferrer' className="group relative"><span className="relative z-20 font-dmono font-medium group-hover:text-blue-800">&lt;develop/&gt;</span><i className="absolute opacity-60 z-10 left bottom-1 inset-x-0 bg-blue-300 h-2 lg:h-3 group-hover:h-5 transition-height duration-300 ease-in-out"></i></a>
                                <TypeWriter /></span>
                        </div>
                    </div>
                </div>


                {/* landing -> image */}
            </main>



        </div >
    );
}

export default Intro;
