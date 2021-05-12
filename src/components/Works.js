//packages
import React from 'react';

//components
import Project from './Project'

//images
import unicodesimg from '../unicodes_ss.png'
import webadvisorimg from '../grades_ss.png'


function Works() {

    const unicodes = {
        title: 'navs-unicodes',
        body: 'A React app that allows access to special characters via quick keyword search. Allows users to copy these characters to their clipboards in seconds, designed to speed up essay and technical report writing.',
        dev: ['React', 'TailwindCSS', 'Vercel'],
        design: ['UI design', 'Wireframes'],
    }
    const webadvisor = {
        title: 'Webadvisor Redesign',
        body: 'A redesign of University of Guelph’s administration portal. Designed to elevate the student user experience.',
        dev: [], //leave this empty if subsection does not exist
        design: ['UI design', 'Wireframes'],
    }



    return (

        <div className="App h-full  text-gray-800 font-poppins font-light text-xl">
            <main className="flex flex-col space-y-12 justify-between px-8 pt-10 xl:px-52 xl:py-32 text-gray-800 text-xl font-poppins">
                <span className="text-2xl xl:text-4xl font-normal">Work</span>
                <div className="flex flex-col space-y-32">
                    <Project title={unicodes.title}
                        body={unicodes.body}
                        img={unicodesimg}
                        dev={unicodes.dev}
                        design={unicodes.design} />
                    <Project title={webadvisor.title}
                        body={webadvisor.body}
                        img={webadvisorimg}
                        dev={webadvisor.dev}
                        design={webadvisor.design} />
                </div>
            </main>
        </div >
    );
}

export default Works;
