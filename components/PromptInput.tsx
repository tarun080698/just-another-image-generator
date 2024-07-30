"use client";
import React, { useState } from "react";

function PromptInput() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="m-3 md:m-10 shadow-lg">
      <form
        className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <textarea
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          className="flex-1 p-4 outline-none rounded-md"
          placeholder="Enter a prompt..."
        ></textarea>
        <button
          disabled={!prompt}
          type="submit"
          className="p-4 text-black transition-colors duration-200 font-extrabold disabled:text-gray-300 disabled:cursor-not-allowed"
        >
          Generate
        </button>
        <button
          className="p-4 bg-[#b5d0f0] text-white transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
          type="button"
        >
          Use Suggestion
        </button>
        <button
          className="p-4 bg-white text-[#b5d0f0] transition-colors duration-200 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400"
          type="button"
        >
          New Suggestion
        </button>
      </form>
    </div>
  );
}

export default PromptInput;
