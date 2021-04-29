//packages
//import React, { useRef } from 'react';
// import { useIntersection } from "react-use";
// import gsap from "gsap";
//components
//images
import unicodes from '../unicodes_ss.png'
import grades from '../grades_ss.png'


function Works() {

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
        <div className="App h-full bg-gray-50 text-gray-800 font-poppins font-light text-xl">
            <main className="flex flex-col space-y-4 justify-between px-8 pt-10 pb-20 md:px-36 md:pt-12 lg:px-52 lg:pt-16 xl:px-96 xl:pt-32 text-gray-800 text-xl font-poppins">
                <span className="text-2xl lg:text-4xl font-light">Work</span>
                <div className="flex flex-col space-y-16">
                    <div className="flex flex-col">
                        <a href="https://navs-unicodes.vercel.app" target=" _blank"><span className="text-lg lg:text-2xl font-medium">navs-unicodes</span></a>
                        <div className=" lg:w-160 mt-2">
                            <span className="text-sm leading-tight lg:text-base text-gray-700">navs-unicodes is a React app that allows access to special characters via quick keyword search. Allows users to copy these characters to their clipboards in seconds, designed to speed up essay and technical report writing.</span>
                        </div>
                        <div className="flex flex-col lg:flex-row mt-6">
                            <div className="flex flex-col space-y-4  lg:flex-row lg:space-x-4">
                                <div className="">
                                    <a href="https://navs-unicodes.vercel.app" target=" _blank"><img src={unicodes} alt="" className="object-contain rounded-md shadow-lg w-160" /></a>
                                </div>
                                <ul className="flex flex-row space-x-4 lg:flex-col lg:space-y-4 text-sm font-medium whitespace-nowrap">
                                    <li className="">UI Design</li>
                                    <li className="">ReactJS</li>
                                    <li className="">TailwindCSS</li>
                                    <li className="">Vercel</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <a href="https://dribbble.com/navs-dribbble" target=" _blank"><span className="text-lg lg:text-2xl font-medium">Webadvisor Redesign</span></a>
                        <div className=" lg:w-160 mt-2">
                            <span className="text-sm leading-tight lg:text-base text-gray-700">A redesign of University of Guelph’s administration portal. Designed to elevate the student user experience.</span>
                        </div>
                        <div className="flex flex-col lg:flex-row mt-6">
                            <div className="flex flex-col space-y-4  lg:flex-row lg:space-x-4">
                                <div className="">
                                    <a href="https://navs-unicodes.vercel.app" target=" _blank"><img src={grades} alt="" className="object-contain rounded-md shadow-lg w-160" /></a>
                                </div>
                                <ul className="flex flex-row space-x-4 lg:flex-col lg:space-y-4 text-sm font-medium whitespace-nowrap">
                                    <li className="">UX Research</li>
                                    <li className="">User Interviews</li>
                                    <li className="">UI Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div >
    );
}

export default Works;
