export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface Props {
  technology: Technology;
  handleAddToStack: (technology: Technology) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  handleAddToStack,
  isAdded,
}: Props) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">

        <img
          src={technology.icon}
          alt={technology.name}
          className="w-12 h-12"
        />
        <div className="badge bg-emerald-50 text-emerald-600 border-emerald-500">
          {technology.badge}
        </div>

        <h2 className="card-title">
          {technology.name}
        </h2>

        <p>{technology.description}</p>

        <div className="flex justify-between text-sm">
          <span>{technology.category}</span>
          <span>{technology.difficulty}</span>
          <span>⭐ {technology.rating}</span>
        </div>

        <div className="text-sm">
          
        </div>

        <button
          onClick={() => handleAddToStack(technology)}
          disabled={isAdded}
          className="btn bg-stone-950 mt-3 text-white rounded-2xl"
        >
          {isAdded
            ? "✓ Added to Stack"
            : "Add To Stack"}
        </button>

      </div>
    </div>
  );
};

export default TechnologyCard;