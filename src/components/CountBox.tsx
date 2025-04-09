import { counterStore } from "../stores/CountStore";

const CountBox = () => {
  const { count } = counterStore();
  return (
    <div className="w-32 h-32 flex items-center justify-center bg-white shadow-md rounded-2xl border-2 border-blue-500 text-4xl font-bold text-blue-600">
      {count}
    </div>
  );
};

export default CountBox;
