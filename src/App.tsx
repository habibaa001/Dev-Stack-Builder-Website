import Nav from "./components/Nav";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";
import TechnologyCard from "./components/TechnologyCard";

function App() {
  const[technologies, setTechnologies] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => setTechnologies(data))
      .catch((error) => console.error("Error fetching technologies:", error));
  }, []);

  return (
    <>
    <Nav />
    <Banner />
    <div className="container mx-auto justify-center items-center">
      <h2 className="text-3xl font-bold mb-6 ">
        Explore the <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {technologies.map((tech: any) => (
          <TechnologyCard
            key={tech.id}
            tech={tech}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
