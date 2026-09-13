import type { Technology } from "../components/TechnologyCard";interface Props {
  stack: Technology[];
  handleRemove: (id: string) => void;
  handleRemoveAll: () => void;
}

const StackSidebar = ({
  stack,
  handleRemove,
  handleRemoveAll,
}: Props) => {
  return (
    <div className="border p-4 rounded-lg">

      <h2 className="font-bold text-xl">
        Your Stack
      </h2>

      <p>
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 && (
        <p className="mt-5 text-gray-500">
          No technology selected
        </p>
      )}

      {stack.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center mt-4"
        >
          <div>
            <img src={item.icon} alt={item.name} className="w-12 h-12" />
            <h3 className="font-bold">{item.name}</h3>
            <p>{item.category}</p>
          </div>

          <button
            onClick={() =>
              handleRemove(item.id)
            }
            className="btn btn-sm btn-error"
          >
            X
          </button>
        </div>
      ))}

      {stack.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="btn btn-error w-full mt-5"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default StackSidebar;