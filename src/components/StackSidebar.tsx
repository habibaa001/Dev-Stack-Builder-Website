import type { Technology } from "../components/TechnologyCard";

interface Props {
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
    <div className="bg-white border border-gray-200 rounded-xl p-4 h-fit">

      <h2 className="font-bold text-xl">
        Your Stack
      </h2>

      <p className="text-sm text-gray-500 mb-4">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-xl py-5 text-center text-gray-400 text-sm">
          Your stack is empty.
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border rounded-lg p-3"
              >
                <div className="flex items-center gap-3">

                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-8 h-8"
                  />

                  <div>
                    <h3 className="font-medium text-sm">
                      {item.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {item.category}
                    </p>
                  </div>

                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleRemoveAll}
            className="btn btn-outline btn-error w-full mt-4"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default StackSidebar;