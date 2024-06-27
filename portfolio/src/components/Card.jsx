// src/components/Card.jsx
import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="max-w-25 rounded-full overflow-hidden shadow-lg m-auto bg-cover bg-center p-10 ">
      <div className="px-6 py-4 bg-slate-50 bg-opacity-50 backdrop-blur-lg rounded-3xl shadow  ">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-black text-base text-justify">{description}</p>
      </div>
    </div>
  );
};

export default Card;

