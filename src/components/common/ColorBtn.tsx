"use client";
import React from "react";

interface colorBtnProps {
  text: string;
  onClick: () => void;
}
const ColorBtn: React.FC<colorBtnProps> = ({ text, onClick }) => {
  return (
    <div className="rounded-md bg-gradient-to-bl from-purple-600 via-rose-500 to-amber-300 p-[0.15rem]">
      <button
        className="bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default ColorBtn;
