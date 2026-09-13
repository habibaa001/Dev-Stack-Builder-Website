import banner from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="min-h-[350px] sm:min-h-[400px] bg-white my-5 sm:my-7 px-4 flex justify-center items-center ">
      <div className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">Build Your Ideal <br /><span className="bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">Development Stack</span></h1>
        <p className="mt-5 text-gray-500">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="btn bg-linear-to-r from-orange-500 to-pink-500 border-none text-white">
            Explore Technologies  
          </button>     
          <button className="btn btn-outline"> 
            Learn More
          </button>
        </div>
      </div>
      <img src={banner} alt="" className="mx-auto max-w-[800px]"/>
            
    </div>
  );
};

export default Banner;
