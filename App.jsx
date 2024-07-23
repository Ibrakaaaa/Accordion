import { useState } from "react";
import accordionItems from "../data/data";

function App() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelect, setEnableMultipleSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelected(selected === id ? null : id);
  }

  function handleMultipleSelection(id) {
    let cpyMultiple = [...multiple];
    const getCurrentIndexId = cpyMultiple.indexOf(id);
    if (getCurrentIndexId === -1) cpyMultiple.push(id);
    else cpyMultiple.splice(getCurrentIndexId, 1);

    setMultiple(cpyMultiple);
  }

  return (
    <div className="w-screen flex mx-auto items-center justify-center align-middle min-h-screen p-10   flex-col bg-gray-900 ">
      <button
        onClick={() => setEnableMultipleSelect(!enableMultipleSelect)}
        className="text-white text-xl font-semibold border-gray-600 border-4 p-2 mb-7 max-w-[400px] w-[300px]"
      >
        {enableMultipleSelect
          ? "Disable Multiple Select"
          : "Enable Multiple Select"}
      </button>
      <div className="flex flex-col max-w-[700px] text-white w-[700px] gap-3">
        {accordionItems.map((accordionItem) => (
          <>
            <div
              className=" flex flex-col cursor-pointer"
              key={accordionItem.id}
            >
              <div className="flex justify-between  py-4  max-w-[700px] w-[700px] bg-gray-600 px-3 items-center space-y-2">
                <h2 className="font-bold">{accordionItem.question}</h2>
                <button
                  className="text-3xl"
                  onClick={
                    enableMultipleSelect
                      ? () => handleMultipleSelection(accordionItem.id)
                      : () => handleSingleSelection(accordionItem.id)
                  }
                >
                  {selected === accordionItem.id || multiple.indexOf(accordionItem.id) !== -1 ? "-" : "+"}
                </button>
              </div>
              {selected === accordionItem.id ||
              multiple.indexOf(accordionItem.id) !== -1 ? (
                <p className="bg-gray-600 px-4 pb-4">{accordionItem.answer}</p>
              ) : (
                ""
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
