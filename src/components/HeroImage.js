import { useSpring, animated } from 'react-spring'

function HeroImage() {
    const spring = useSpring({
        from: {
            myXTranslateValue: 30,
        },
        to: {
            myXTranslateValue: 0,
        },
        config: {
            mass: 1,
        },
    });

    return (
        <animated.div style={{
            transform: spring.myXTranslateValue.interpolate(myXTranslateValue => `translate(${myXTranslateValue}px)`),
        }} className="flex flex-col relative w-72  pb-5/12 flex-none h-96">
            <img className="absolute top-0 h-full w-full object-cover content-end border-2 border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 " src="https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
        </animated.div>
    );
}

export default HeroImage;