import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className=" bg-white shadow-md">
      <div className="container mx-auto flex justify-between py-4 bg-white">
        <img src={Logo} alt="Logo" />
        <ul className="flex gap-6 items-center text-gray-600">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className="flex gap-4 items-center">
          <button className="btn btn-ghost">Sign In</button>
          <button className="btn rounded-full bg-pink-700 border-none text-white hover:bg-pink-600">
            Sign Up
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
