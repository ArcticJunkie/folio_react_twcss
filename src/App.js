import Typical from 'react-typical';
import { useSpring, animated } from 'react-spring'

function App() {
  const spring = useSpring({
    from: {
      myXTranslateValue: 60,
    },
    to: {
      myXTranslateValue: 0,
    },
    config: {
      mass: 1,
    },
  });
  return (
    <div className="App bg-white h-screen ">


      <main className="flex flex-col space-y-8 justify-between px-8 pt-10 md:flex-row md:space-x-16 md:px-52 md:pt-20 bg-white text-gray-800 text-xl font-poppins">

        {/* landing -> hero text */}
        <div className="flex justify-between flex-col space-y-6">
          <div className="flex flex-col space-y-10">

            <div className="flex flex-col space-y-8 font-semibold">
              <span className="">Abhinav Verma</span>
              <span className="">I <a href="https://dribbble.com/navs_lists" target="_blank" className="group relative"><span className="relative z-20 italic font-semibold group-hover:text-black ">design</span><i className="absolute opacity-60 z-10 left bottom-1 inset-x-0 bg-blue-300 h-1.5 group-hover:h-3 transition-height duration-200 ease-in-out "></i></a> and <a href="https://github.com/ArcticJunkie" target="_blank" className="group relative"><span className="relative z-20 font-mono font-semibold group-hover:text-black">develop</span><i className="absolute opacity-60 z-10 left bottom-1 inset-x-0 bg-blue-300 h-1.5 group-hover:h-3 transition-height duration-200 ease-in-out"></i></a>
                <span className="inline font-poppins"><Typical
                  loop={2}
                  wrapper="n"
                  steps={[
                    2250,
                    ' experiences.',
                    2250,
                    ' interfaces.',
                    2250,
                    ' websites.',
                    8000
                  ]}
                /></span></span>
              <span className="font-normal text-normal leading-8">I slot-in throughout the digital product life-cycle; taking a big-picture approach to projects, I strive to contribute at every stage, from concept to delivery, there's always room for improvement.</span>
            </div>

            <div className="flex flex-row space-x-8 text-gray-500 text-base">
              <span className="">BRAND-STRATEGY</span>
              <span className="">DESIGN</span>
              <span className="">DEVELOPMENT</span>
            </div>
          </div>

          <div className=" text-sm text-gray-500">
            <span>Job opportunities are warmly welcomed, </span>
            <span className="block">I’m searching for a full-time job at an agency or startup.</span>
          </div>
        </div>

        {/* landing -> image */}
        <animated.div style={{
          transform: spring.myXTranslateValue.interpolate(myXTranslateValue => `translate(${myXTranslateValue}px)`),
        }} className="flex flex-col relative w-72  pb-5/12 flex-none h-96">
          <img className="absolute top-0 h-full w-full object-cover content-end border-4 border-gray-700 hover:shadow-lg transition-all duration-300 " src="https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
        </animated.div>


      </main>


    </div>
  );
}

export default App;
