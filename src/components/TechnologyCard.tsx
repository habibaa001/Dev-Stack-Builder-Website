type TechnologyProps = {
  tech: {
    id: string;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge: string;
  };
};

const TechnologyCard = ({ tech }: TechnologyProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center">
        <img src={tech.icon} alt={tech.name} className="w-14 h-14" />

        <div className="badge badge-accent border-none bg-emerald-50 text-emerald-600">
          {tech.badge}
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-4">{tech.name}</h2>

      <p className="text-gray-500 mt-2">{tech.description}</p>

      <div className="flex gap-2 mt-4">
        <div className="bg-slate-100 text-slate-600 rounded-lg px-3 py-1.5">
          {tech.category}
        </div>

        <div className="text-slate-500 font-medium px-3 py-1.5">
          {tech.difficulty}
        </div>
        <span className="text-black flex items-center gap-1 font-bold text-slate-900 ">
          ⭐ {tech.rating}
        </span>
      </div>

      <button className="btn btn-block bg-[#090D16] hover:bg-slate-800 text-white border-none rounded-xl mt-4">
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;
