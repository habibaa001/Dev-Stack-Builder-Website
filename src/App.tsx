import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import StackSidebar from "./components/StackSidebar";
import TechnologyCard from "./components/TechnologyCard";
import type { Technology } from "./components/TechnologyCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading technologies:", error);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const exists = stack.find((item) => item.id === technology.id);

    if (exists) {
      toast.warning("Already Added");
      return;
    }

    setStack((prev) => [...prev, technology]);
    toast.success("Added To Stack");
  };

  const handleRemove = (id: string) => {
    const remaining = stack.filter((item) => item.id !== id);
    setStack(remaining);
    toast.info("Technology removed");
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <>
      <Nav />

      <main>
        <Banner />

        <div className="container mx-auto py-4 bg-white">
          <div className="mb-8">
            <h2 className="text-4xl font-bold">
              Explore the{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>

            <p className="text-gray-500 mt-2">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              
              {loading ? (
                <div className="flex justify-center items-center py-20">
                  <span className="loading loading-spinner loading-lg"></span>
                  <span className="ml-3 text-gray-500">
                    Loading technologies...
                  </span>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {technologies.map((tech) => (
                    <TechnologyCard
                      key={tech.id}
                      technology={tech}
                      handleAddToStack={handleAddToStack}
                      isAdded={stack.some(
                        (item) => item.id === tech.id
                      )}
                    />
                  ))}
                </div>
              )}
            </div>

            <StackSidebar
              stack={stack}
              handleRemove={handleRemove}
              handleRemoveAll={handleRemoveAll}
            />
          </div>
        </div>

        <ToastContainer />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;