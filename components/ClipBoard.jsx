"use client";
import { useState } from "react";
import { FaClipboard } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const ClipBoard = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard
      .writeText("eliaswu466@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <div className="border border-gray-600 rounded-md shadow-sm bg-gray-700">
      <div className="flex p-4 rounded-t-md justify-between items-center bg-black">
        <div className="flex gap-3 items-center">
          <FaTerminal className="w-5 h-5 text-gray-300" />
          <p className="text-sm ">Terminal</p>
        </div>
        {copied ? (
          <FaCheck className="w-6 h-6 text-green-300 cursor-pointer transition-colors duration-300 ease-in-out transform scale-110 hover:bg-gray-600 p-1 rounded " />
        ) : (
          <FaClipboard
            className="w-6 h-6 text-gray-300 cursor-pointer hover:bg-gray-600 p-1 rounded transition-transform duration-300 ease-in-out transform scale-110"
            onClick={handleCopy}
          />
        )}
      </div>

      <div className="p-4 rounded-b-md bg-neutral-950 border-t border-gray-600">
        <p className="text-left">eliaswu466@gmail.com</p>
      </div>
    </div>
  );
};

export default ClipBoard;
