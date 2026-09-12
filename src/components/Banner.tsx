import banner from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="min-h-[400px] bg-white my-7 flex justify-center items-center">
      <div>
        <h2 className="font-bold text-4xl">Build Your Ideal Development Stack</h2>
        <p>
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
      </div>
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;
