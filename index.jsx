import { useState } from "react";
import data from "./data";
import "./accordion-styles.css";


export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSIngleSelect(getCUrrentId) {
    setSelected(selected === getCUrrentId ? null : getCUrrentId);
  }

  function handleMultipleSelection(getCUrrentId) {
    let cpyMultiple = [...multiple];
    const getCurrentIndexId = cpyMultiple.indexOf(getCUrrentId);
    if (getCurrentIndexId === -1) cpyMultiple.push(getCUrrentId);
    else cpyMultiple.splice(getCurrentIndexId, 1);

    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <button
        className="accordion-btn"
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        {enableMultipleSelection
          ? "Disable Multiple Selection"
          : "Enable Multiple Selection"}
      </button>
      <div className="accordion">
        {data && data.length > 0
          ? data.map((accordionItem) => (
              <div className="item" key={accordionItem.id}>
                <div
                  className="title"
                  onClick={enableMultipleSelection ? () => handleMultipleSelection(accordionItem.id) : () => handleSIngleSelect(accordionItem.id)}
                >
                  <h3>{accordionItem.question}</h3>
                  <span className="span">
                    {selected === accordionItem.id || multiple.indexOf(accordionItem.id) !== -1 ? "-" : "+"}
                  </span>
                </div>
                {selected === accordionItem.id || multiple.indexOf(accordionItem.id) !== -1 ? (
                  <div>{accordionItem.answer}</div>
                ) : null}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}