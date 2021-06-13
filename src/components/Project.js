import { useInView } from 'react-intersection-observer';


function Project(props) {
    const [titleRef, titleInView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });
    const [bodyRef, bodyInView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });
    const [subsRef, subsInView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });
    return (
        <div className="flex flex-col">
            <a href={props.link} target=" _blank"><span className="text-2xl xl:text-4xl font-medium xl:font-normal font-dmono transition-all duration-1000 ease-in-out" ref={titleRef} style={{ opacity: titleInView ? 1 : 0 }}>{props.title}</span></a>
            <div ref={bodyRef} style={{ opacity: bodyInView ? 1 : 0 }} className="xl:w-160 mt-4  transition-all duration-1000 ease-in-out">
                <span className="leading-tight text-base xl:text-lg text-gray-700">{props.body}</span>
            </div>
            <div style={{ opacity: bodyInView ? 1 : 0 }} className={"flex flex-col xl:flex-row mt-8 transition-all duration-1000 ease-in-out"}>
                <div className="flex flex-col space-y-4  xl:flex-row xl:space-x-4 xl:space-y-0">
                    <div className="bg-gray-800 h-full w-full xl:h-full xl:w-160">
                        <a href={props.link} target=" _blank"><img src={props.img} alt="" className="object-fit object-left-top rounded-sm shadow-sm h-full w-full xl:mix-blend-soft-light hover:mix-blend-normal" /></a>
                    </div>
                    <div ref={subsRef} style={{ opacity: subsInView ? 1 : 0 }} className={"w-96 flex flex-row space-x-10 xl:flex-col xl:space-y-8 xl:space-x-0 text-sm xl:text-base 2xl:text-lg font-normal whitespace-nowrap transition-all duration-1000 ease-in-out " + (subsInView ? 'animate-slideleft' : 'animate-none')}>
                        {props.design.length > 0 &&
                            <div className="flex flex-col space-y-2">
                                <span className="font-dmono font-medium">DESIGN</span>
                                <ul className="flex flex-col space-y-2">
                                    {props.design.map((val, index) => {
                                        return (
                                            <li key={index} className="">{val}</li>
                                        )
                                    })}
                                </ul>
                            </div>}
                        {props.dev.length > 0 &&
                            <div className="flex flex-col space-y-2">
                                <span className="font-dmono font-medium">DEVELOPMENT</span>
                                <ul className="flex flex-col space-y-2">
                                    {props.dev.map((val, index) => {
                                        return (
                                            <li key={index} className="">{val}</li>
                                        )
                                    })}
                                </ul>
                            </div>}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Project;