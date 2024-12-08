import React from "react";

const VisitedCountry = ({ Visited }) => {
  return (
    <div className="border-2 border-black m-4 p-4 flex flex-wrap gap-3 ">
      {Visited.length > 0 ? (
        Visited.map((data, idx) => (
          <div
            key={idx}
            className="w-32 p-4 rounded-xl bg-pink-100 flex flex-col justify-center items-center gap-2"
          >
            <img className="w-28 h-16" src={data.flagurl} alt="" />
            <h1 className="font-bold text-center">{data.name}</h1>
          </div>
        ))
      ) : (
        <h1>No country visited 🥲</h1>
      )}
    </div>
  );
};

export default VisitedCountry;
