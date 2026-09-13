import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
              Build Your Ideal{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-4 text-gray-500 text-base sm:text-lg leading-7">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next 
              project.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600  text-white rounded-2xl">
                Explore Technologies
              </button>

              <button className="btn btn-outline rounded-2xl">
                Learn More
              </button>
            </div>
          </div>

          {/* Banner Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={banner}
              alt="Development Stack"
              className="w-full max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
