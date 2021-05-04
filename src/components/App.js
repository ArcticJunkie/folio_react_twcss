

//components
import HeroImageAlt from './HeroImageAlt';
import TypeWriter from './TypeWriter';

function App() {
  return (
    <div className="App h-screen bg-blue-50">


      <main className="flex flex-col space-y-8 justify-between px-8 pt-10 md:px-36 md:pt-12 lg:px-52 lg:pt-16 xl:px-96 xl:pt-32 md:flex-row md:space-y-0 md:space-x-16  text-gray-800 text-xl font-poppins">

        {/* landing -> hero text */}
        <div className="flex justify-between flex-col space-y-6 xl:space-y-8">
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-7 xl:space-y-8 font-semibold">
              <span className="text-lg md:text-xl xl:text-2xl">Abhinav Verma</span>
              <span className="text-base md:text-xl xl:text-2xl">I  {' '}
                <a href="https://dribbble.com/navs-dribbble" target="_blank" className="group relative"><span className="relative z-20 italic font-semibold group-hover:text-blue-800 ">design</span><i className="absolute opacity-60 z-10 left bottom-1 inset-x-0 bg-blue-300 h-1.5 group-hover:h-3 transition-height duration-200 ease-in-out "></i></a>
                {' '}and{' '}
                <a href="https://github.com/navs-github" target="_blank" className="group relative"><span className="relative z-20 font-dmono font-semibold group-hover:text-blue-800">&lt;develop/&gt;</span><i className="absolute opacity-60 z-10 left bottom-1 inset-x-0 bg-blue-300 h-1.5 group-hover:h-3 transition-height duration-200 ease-in-out"></i></a>
                <TypeWriter /></span>
              <span className="font-normal text-base md:text-xl xl:text-2xl leading-relaxed">I slot-in throughout the digital product life-cycle; taking a big-picture approach to projects, I strive to contribute at every stage, from concept to delivery.</span>
            </div>

            <div className="flex flex-row space-x-8 xl:space-x-10 text-gray-500 text-sm md:text-base xl:text-lg whitespace-nowrap">
              <span className="">BRAND-STRATEGY</span>
              <span className="">DESIGN</span>
              <span className="">DEVELOPMENT</span>
            </div>
          </div>

          <div className="text-xs md:text-sm xl:text-base text-gray-500">
            <span>Job opportunities are warmly welcomed. </span>
            <span className="block">I’m searching for a full-time position at an agency or startup.</span>
          </div>
        </div>

        {/* landing -> image */}
        <HeroImageAlt />
      </main>


    </div >
  );
}

export default App;
