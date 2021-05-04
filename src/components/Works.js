//packages
import React from 'react';
import { useInView } from 'react-intersection-observer';

//components
//images
import unicodes from '../unicodes_ss.png'
import grades from '../grades_ss.png'


function Works() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-300px 0px',
    });

    const [ref2, inView2] = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px',
    });

    // const sectionRef = useRef(null);
    // const intersection = useIntersection(sectionRef, {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 0.9,
    // });

    // const fadeIn = element => {
    //     gsap.to(element, 1, {
    //         opacity: 1,
    //         y: -30,
    //         ease: "power4.out",
    //         stagger: {
    //             amount: 0.3
    //         }
    //     });
    // };

    // const fadeOut = element => {
    //     // gsap.to(element, 1, {
    //     //     opacity: 0,
    //     //     y: -20,
    //     //     ease: "power4.out",
    //     // });
    // };

    // if (intersection && intersection.intersectionRatio < 0.9) {
    //     fadeOut(".fadeIn")
    //     console.log("def")
    // }
    // else {
    //     console.log("abc");
    //     fadeIn(".fadeIn");
    // };

    return (
        <div className="App h-full  text-gray-800 font-poppins font-light text-xl">
            <main className="flex flex-col space-y-12 justify-between px-8 pt-10 xl:px-52 xl:py-32 text-gray-800 text-xl font-poppins">
                <span className="text-2xl xl:text-4xl font-normal">Work</span>
                <div className="flex flex-col space-y-32">
                    <div ref={ref2} style={{ opacity: inView2 ? 1 : 0 }} className="transition-all duration-1000 ease-in-out flex flex-col">
                        <a href="https://navs-unicodes.vercel.app" target=" _blank"><span className="text-lg xl:text-2xl font-medium font-dmono">navs-unicodes</span></a>
                        <div className="xl:w-160 mt-2">
                            <span className="text-sm leading-tight  font-normal xl:font-normal xl:text-base text-gray-700">A React app that allows access to special characters via quick keyword search. Allows users to copy these characters to their clipboards in seconds, designed to speed up essay and technical report writing.</span>
                        </div>
                        <div className="flex flex-col xl:flex-row mt-6">
                            <div className=" flex flex-col space-y-4  xl:flex-row xl:space-x-8 xl:space-y-0">
                                <div className="">
                                    <a href="https://navs-unicodes.vercel.app" target=" _blank"><img src={unicodes} alt="" className="object-contain rounded-sm shadow-sm w-160" /></a>
                                </div>
                                <div className="flex flex-row space-x-10 xl:flex-col xl:space-y-4 xl:space-x-0 text-xs xl:text-sm font-normal whitespace-nowrap">
                                    <div className="flex flex-col space-y-2">
                                        <span className="font-dmono font-bold">Design</span>
                                        <ul className="flex flex-col space-y-2">
                                            <li className="">User Interface Design</li>
                                            <li className="">Figma</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <span className="font-dmono font-bold">Development</span>
                                        <ul className="flex flex-col space-y-2">
                                            <li className="">ReactJS</li>
                                            <li className="">TailwindCSS</li>
                                            <li className="">Vercel</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={ref} style={{ opacity: inView ? 1 : 0 }} className="flex flex-col transition-all duration-1000 ease-in-out">
                        <a href="https://dribbble.com/navs-dribbble" target=" _blank"><span className="text-lg xl:text-2xl font-medium font-dmono">Webadvisor Redesign</span></a>
                        <div className="xl:w-160 mt-2">
                            <span className="text-sm leading-tight  font-normal xl:font-normal xl:text-base text-gray-700">A redesign of University of Guelph’s administration portal. Designed to elevate the student user experience.</span>
                        </div>
                        <div className="flex flex-col xl:flex-row mt-6">
                            <div className=" flex flex-col space-y-4  xl:flex-row xl:space-x-8 xl:space-y-0">
                                <div className="">
                                    <a href="https://dribbble.com/navs-dribbble" target=" _blank"><img src={grades} alt="" className="object-contain rounded-sm shadow-sm w-160" /></a>
                                </div>
                                <div className="flex flex-row space-x-4 xl:flex-col xl:space-y-4 xl:space-x-0 text-xs xl:text-sm font-normal whitespace-nowrap">
                                    <div className="flex flex-col space-y-2">
                                        <span className="font-dmono font-bold">Design</span>
                                        <ul className="flex flex-col space-y-2">
                                            <li className="">Wireframes</li>
                                            <li className="">User Research</li>
                                            <li className="">User Interface Design</li>
                                        </ul>
                                    </div>
                                    <div className="hidden flex flex-col space-y-2">
                                        <span className="font-dmono font-bold">Development</span>
                                        <ul className="flex flex-col space-y-2">
                                            <li className="">ReactJS</li>
                                            <li className="">TailwindCSS</li>
                                            <li className="">Vercel</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div >
    );
}

export default Works;
