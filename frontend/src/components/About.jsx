import headshot from "../assets/Headshot.png";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-3xl mx-auto text-center py-24 px-6 animate-fadeIn"
    >
      <h2 className="text-4xl font-bold mb-8">About Me</h2>

      <img
        src={headshot}
        alt="Portrait of Brian Jeong"
        className="w-40 h-40 object-cover rounded-full mx-auto mb-8 shadow-md"
      />

      <p className="text-gray-700 leading-relaxed text-lg">
        I’m <span className="text-accent font-semibold">Brian Jeong</span>, a
        digital creator and writer who thinks deeply about how design, media,
        and technology shape the way we communicate. This portfolio gathers a
        collection of my digital rhetorical work—projects that blend analysis,
        visual storytelling, and reflection.
      </p>

      <p className="text-gray-700 leading-relaxed text-lg mt-4">
        My goal is to create media that feels intentional, clear, and human.
        Whether I’m breaking down the rhetoric behind a tech announcement or
        building a visual argument, I’m always interested in how digital spaces
        influence identity and interpretation. This site is both a record of
        that exploration and an artifact of my growth as a digital composer.
      </p>
    </section>
  );
}
