
//packages
import React from 'react';
import { useInView } from 'react-intersection-observer';


//components
import Project from './Project'

//images
import unicodesimg from '../unicodes_ss.png'
import webadvisorimg from '../img/ut_ss.png'
import raofolioimg from '../img/raofolio_ss.png'


function Works() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });
    const raofolio = {
        title: 'raofolio',
        body: "Tailoring an online presence for a fashion model.",
        dev: ['React', 'TailwindCSS', 'Sequential Animations', 'Cloudinary CDN'],
        design: ['UI design', 'Wireframes', 'Typography'],
        link: 'https://www.raofolio.in'
    }

    const unicodes = {
        title: 'navs-unicodes',
        body: 'Making special characters more accessible with this pocket-sized React app.',
        dev: ['React', 'TailwindCSS', 'Vercel'],
        design: ['UI design'],
        link: 'https://navs-unicodes.vercel.app/'
    }
    const webadvisor = {
        title: 'Webadvisor Redesign',
        body: 'A redesign of University of Guelph’s administration portal. Designed to elevate the student user experience.',
        dev: [], //leave this empty if subsection does not exist
        design: ['UI design', 'Wireframes'],
    }



    return (
        <div className="h-full bg-gray-100  text-gray-800 font-poppins text-xl">
            <main className={" px-8 py-10 xl:px-52 xl:py-40 text-gray-800 text-xl font-poppins transition-all duration-700 ease-out bg-white bg-triangle"}>
                <div className={(inView ? 'animate-slideup' : 'animate-none')}>
                    <h1 ref={ref} style={{ opacity: inView ? 1 : 0 }} className={"text-2xl xl:text-5xl font-normal transition-all duration-700 ease-out"}>Projects</h1>
                </div>
                <div className="mt-10 xl:mt-20 flex flex-col space-y-32">
                    <Project title={raofolio.title}
                        body={raofolio.body}
                        img={raofolioimg}
                        link={raofolio.link}
                        dev={raofolio.dev}
                        design={raofolio.design} />
                    <Project title={unicodes.title}
                        body={unicodes.body}
                        img={unicodesimg}
                        link={unicodes.link}
                        dev={unicodes.dev}
                        design={unicodes.design} />
                    {/* <Project title={webadvisor.title}
                        body={webadvisor.body}
                        img={webadvisorimg}
                        dev={webadvisor.dev}
                        design={webadvisor.design} /> */}
                </div>
            </main>
        </div >
    );
}

export default Works;
