import { useSpring, animated } from 'react-spring'


function HeroImageAlt() {
    const spring = useSpring({
        to: {
            transform: 'translateX(-1%)',
            opacity: '1',
        },
        from: {
            transform: 'translateX(60%)',
            opacity: '0',
        },
        config: {
            mass: 1,
            tension: 50,
        },
    });

    return (
        <animated.div
            style={spring}
            className="hidden md:flex flex-col relative w-72 xl:w-96 pb-5/12 flex-none h-96">
            <img className="absolute top-0 h-full w-full object-cover content-end border-gray-700 hover:border-blue-900 transition-all duration-300 rounded-sm" src="https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
        </animated.div>
    );
}

export default HeroImageAlt;