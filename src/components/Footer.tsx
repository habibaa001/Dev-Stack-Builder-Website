import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white px-4 py-10">
      <div className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img src={Logo} alt="Dev Stack Logo" className="h-10" />
          <p className="mt-3 text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.{" "}
          </p>
          <div className="flex gap-3 mt-4">
            <a className="text-gray-600 hover:text-gray-700">GitHub</a>
            <a className="text-gray-600 hover:text-gray-700">Twitter</a>
            <a className="text-gray-600 hover:text-gray-700">LinkedIn</a>
          </div>
        </div> 

        <div>
          <h3 className="font-bold mb-2"> PRODUCT</h3>
          <p className="font-semibold text-gray-500">Home</p>
          <p className="font-semibold text-gray-500">Technologies</p>
          <p className="font-semibold text-gray-500">Projects</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">COMPANY</h3>
          <p className="font-semibold text-gray-500">About</p>
          <p className="font-semibold text-gray-500">Contact</p>
          <p className="font-semibold text-gray-500">Careers</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">LEGAL  </h3>
          <p className="font-semibold text-gray-500">Privacy Policy</p>
          <p className="font-semibold text-gray-500">Terms of Service</p>
        </div>
      </div>

      <div className="border-t py-4 justify-content-center text-center text-gray-500">
        © 2026 Dev Stack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
