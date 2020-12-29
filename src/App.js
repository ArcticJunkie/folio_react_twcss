

function App() {
  return (
    <div className="App bg-white">


      <main className="flex justify-between space-x-8 px-8 py-10 md:px-52 md:py-20 bg-blue-50 text-gray-800 text-xl font-poppins">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-row space-x-8 text-gray-500 text-base">
            <span className="">BRAND-STRATEGY</span>
            <span className="">DESIGN</span>
            <span className="">DEVELOPMENT</span>
          </div>
          <div className="">Abhinav Verma</div>
          <div className="">
            <span>Something something aesthetics and technology -> method + madness idk. Make this longer by adding more words abc abc abc abc abc abc abc </span>
            <div className="py-4">
              <span className="">Put simply, I <a href="" className="group relative"><span className="relative z-20 italic font-semibold group-hover:text-black ">design</span><i className="absolute opacity-60 z-10 left bottom-1 inset-x-0 bg-blue-300 h-1.5 group-hover:h-3 transition-height duration-300 ease-in-out "></i></a> and <a href="" className="group relative"><span className="relative z-20 font-mono font-semibold group-hover:text-black">develop</span><i className="absolute opacity-60 z-10 left bottom-1 inset-x-0 bg-blue-300 h-1.5 group-hover:h-3 transition-height duration-300 ease-in-out"></i></a>  experiences</span>
            </div>
            <div className=" text-sm text-gray-500">
              <span>Job opportunities are warmly welcomed, </span>
              <span className="block">I’m searching for a full-time job at an agency or startup.</span>
            </div>
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
