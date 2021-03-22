import React from "react";
import NameBox from "./NameBox";

const App = ({ vava }) => {
  console.log(vava);
  const arr = [
    "윤상호",
    "김한주",
    "노재민",
    "황예규",
    "송재홍",
    "서재완",
    "박은비",
    "김보미",
    "김동현",
  ];

  return (
    <div className="wrapper">
      {arr.map((data, idx) => {
        return <NameBox potato={data} key={idx} />;
      })}
    </div>
  );
};

export default App;
