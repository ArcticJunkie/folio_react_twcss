

function About() {
    return (
        <div className="Nav text-gray-700">
            <div className="flex flex-col space-y-8">
                <span className="text-4xl font-light">Hybridized Skillset</span>
                <div className="flex flex-row text-lg">
                    <div className="fadeIn flex flex-col space-y-8 w-1/2 rounded-md mr-5 p-8 bg-blue-300 text-black">
                        <span className="text-xl"><span className="font-medium">UX Designer</span></span>
                        <p className="flex flex-col space-y-1">
                            <span className="font-medium">Handoff Efficiency</span>
                            <span className="text-gray-800">Ipsum accumsan molestie ac arcu viverra tempus pharetra. Sit aliquam pulvinar iaculis massa. Enim vitae, sit leo pellentesque tellus tempor semper ullamcorper non.</span>
                        </p>
                        <p className="flex flex-col space-y-1">
                            <span className="font-medium">Browser Limitations</span>
                            <span className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus iaculis vitae nec egestas donec malesuada ac ultricies. </span>
                        </p>
                    </div>
                    <div className="flex flex-col space-y-8 w-1/2 rounded-md ml-5 p-8 bg-gray-800 text-gray-50">
                        <span className="text-xl"><span className="font-medium">Frontend Developer</span></span>
                        <p className="flex flex-col space-y-1">
                            <span className="font-medium">Pixel Perfect Implementation</span>
                            <span className="text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus iaculis vitae nec egestas donec malesuada ac ultricies. </span>
                        </p>
                        <p className="flex flex-col space-y-1">
                            <span className="font-medium">Pixel Perfect Implementation</span>
                            <span className="text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus iaculis vitae nec egestas donec malesuada ac ultricies. </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
