import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 sticky top-0 z-50 
      bg-white/70 backdrop-blur-md border-b border-accent/30 shadow-sm">

      {/* Brand */}
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">
        Brian Jeong
        <span className="text-accent">.</span>
      </h1>

      {/* Links */}
      <div className="flex gap-8 text-md font-medium">
        {[
          ["Home", "#home"],
          ["Project 1", "#project1"],
          ["Project 2", "#project2"],
          ["About", "#about"],
          ["Essay", "#essay"],
        ].map(([label, link]) => (
          <a
            key={label}
            href={link}
            className="relative text-gray-800 hover:text-accent transition font-semibold
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
              after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
