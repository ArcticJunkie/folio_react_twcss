import Typical from 'react-typical';

function App() {
  return (
    <div className="App bg-yellow-100 h-screen">


      <main className="flex justify-between space-x-16 px-8 py-10 md:px-52 md:py-20 bg-yellow-100 text-gray-800 text-xl font-poppins">

        <div className="flex justify-between flex-col space-y-6">
          <div className="flex flex-col space-y-4">

            <div className="flex flex-col space-y-2 font-semibold">
              <span className="">Abhinav Verma</span>
              <span className="">I <a href="https://dribbble.com/navs_lists" target="_blank" className="group relative"><span className="relative z-20 italic font-semibold group-hover:text-black ">design</span><i className="absolute opacity-60 z-10 left bottom-1 inset-x-0 bg-blue-300 h-1.5 group-hover:h-3 transition-height duration-300 ease-in-out "></i></a> and <a href="https://github.com/ArcticJunkie" target="_blank" className="group relative"><span className="relative z-20 font-mono font-semibold group-hover:text-black">develop</span><i className="absolute opacity-60 z-10 left bottom-1 inset-x-0 bg-blue-300 h-1.5 group-hover:h-3 transition-height duration-300 ease-in-out"></i></a>
                <span className="inline font-poppins"><Typical
                  loop={Infinity}
                  wrapper="n"
                  steps={[
                    ' websites.',
                    4000,
                    ' interfaces.',
                    4000,
                    ' experiences.',
                    4000
                  ]}
                /></span></span>
              <span className="font-normal text-sm">I play with fonts and files, colors and code, design systems and JavaScript frameworks. I wear many hats along the product life-cycle, and I'll help you figure out where you need me the most.</span>
              <span className="font-normal text-sm">I play with fonts and files, colors and code, design systems and JavaScript frameworks. I wear many hats along the product life-cycle, and I'll help you figure out where you need me the most.</span>
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

        <div className="relative w-72 bg-yellow-100 pb-5/12 flex-none">
          <img className="absolute top-0 h-full w-full object-cover content-bottom" src="https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
        </div>

      </main>


    </div>
  );
}

export default App;
