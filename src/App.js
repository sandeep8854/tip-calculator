import { useState } from "react";
import "./style.css";
export default function App() {
  return (
    <div className="App">
      <h2 className="heading-2">Tip Calculator</h2>
      <span className="dhaba">Sardarji Ka Dhaba</span>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  //
  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onsetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did you friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onsetBill }) {
  console.log(bill);
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        placeholder="Enter the Bill Amount"
        value={bill}
        onChange={(e) => onsetBill(+e.target.value)}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onSelect(+e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3 className="pay">
      You pay ₹{bill + tip} (₹{bill} + ₹{tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return (
    <div className="button-center">
      <button className="link-secondary" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
