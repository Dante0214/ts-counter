import { useState } from "react";
import "./App.css";
import CountBox from "./components/CountBox";
import { counterStore } from "./stores/CountStore";

function App() {
  const { increase, decrease, increaseby, decreaseby } = counterStore();
  const [inputValue, setInputValue] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  const handleAdd = () => {
    increaseby(inputValue);
    setInputValue(0);
  };

  const handleSubtract = () => {
    increaseby(-inputValue);
    setInputValue(0);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-2">
      <CountBox />

      <div className="mt-4 flex gap-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={increase}
        >
          +1
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={decrease}
        >
          -1
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => increaseby(10)}
        >
          +10
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => decreaseby(10)}
        >
          -10
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 ">
        <input
          type="number"
          value={inputValue}
          onChange={handleChange}
          className="px-2 py-1 border rounded w-full md:w-auto"
        />
        <button
          className="px-3 py-1 bg-green-500 text-white rounded w-full md:w-auto"
          onClick={handleAdd}
        >
          +입력값
        </button>
        <button
          className="px-3 py-1 bg-yellow-500 text-white rounded w-full md:w-auto"
          onClick={handleSubtract}
        >
          -입력값
        </button>
      </div>
    </div>
  );
}

export default App;
