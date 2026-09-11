import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className=" bg-white ">
      <div className="container mx-auto flex justify-between">
        <img src={Logo} alt="Logo" />
        <ul className="flex gap-6 items-center">
          <li>Home</li>
          <li>Technologies</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className="flex gap-4 items-center" >
          <button className="btn btn-signIn">Sign In</button>
          <button className="btn btn-signUp">Sign Up</button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
