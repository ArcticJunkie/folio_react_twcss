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
            <a href={props.link} target=" _blank"><span ref={titleRef} style={{ opacity: titleInView ? 1 : 0 }} className="text-lg xl:text-2xl font-medium font-dmono transition-all duration-1000 ease-in-out ">{props.title}</span></a>
            <div ref={bodyRef} style={{ opacity: bodyInView ? 1 : 0 }} className="xl:w-160 mt-2 transition-all duration-1000 ease-in-out">
                <span className="text-sm leading-tight  font-normal xl:font-normal xl:text-base text-gray-700">{props.body}</span>
            </div>
            <div style={{ opacity: bodyInView ? 1 : 0 }} className="flex flex-col xl:flex-row mt-6 transition-all duration-1000 ease-in-out">
                <div className="flex flex-col space-y-4  xl:flex-row xl:space-x-8 xl:space-y-0">
                    <div className="bg-gray-700 h-full w-full xl:h-full xl:w-160">
                        <a href={props.link} target=" _blank"><img src={props.img} alt="" className="object-cover object-left-top rounded-sm shadow-sm h-full w-full" /></a>
                    </div>
                    <div ref={subsRef} style={{ opacity: subsInView ? 1 : 0 }} className={"w-96 flex flex-row space-x-10 xl:flex-col xl:space-y-4 xl:space-x-0 text-xs xl:text-sm font-normal whitespace-nowrap transition-all duration-1000 ease-in-out " + (subsInView ? 'animate-slideleft' : 'animate-none')}>
                        {props.design.length > 0 &&
                            <div className="flex flex-col space-y-2">
                                <span className="font-dmono font-bold">Design</span>
                                <ul className="flex flex-col space-y-2">
                                    {props.design.map((val, index) => {
                                        return (
                                            <li key={index} className="">{val}</li>
                                        )
                                    })}
                                </ul>
                            </div>}
                        {/*     
    {props.hasImage ?
      <MyImage /> :
      <OtherElement/>
    } */}
                        {props.dev.length > 0 &&
                            <div className="flex flex-col space-y-2">
                                <span className="font-dmono font-bold">Development</span>
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