import { useState } from "react";
import apple from "../assets/apple.png";

export default function Project1() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="project1"
      className="max-w-4xl mx-auto py-24 px-6 animate-fadeIn"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">
        Project 1: “Shot on iPhone” Rhetorical Analysis
      </h2>

      {/* Image */}
      <img
        src={apple}
        alt="Apple 'Shot on iPhone' billboard"
        className="rounded-xl shadow-lg mx-auto mb-4"
      />
      <p className="text-sm text-gray-500 italic text-center mb-8">
        Figure 1. Billboard from Apple’s “Shot on iPhone” campaign,
        illustrating its minimalist composition and visual hierarchy.
      </p>

      {/* Summary */}
      <p className="text-gray-700 leading-relaxed mb-6">
        Apple’s <em>“Shot on iPhone”</em> campaign transforms minimalist design
        into argument. Through scale, silence, and curation, it invites viewers
        to perform the conclusion that the iPhone camera is professional-grade.
        The analysis explores how Apple’s design choices enact digital rhetoric,
        teaching audiences how to see, emulate, and participate in a curated
        aesthetic of creativity and belonging.
      </p>

      {/* Toggle button */}
      <div className="text-center mb-6">
        <button
          onClick={() => setExpanded(!expanded)}
          className="border border-accent text-accent px-6 py-2 rounded-md hover:bg-accent hover:text-white transition font-medium"
        >
          {expanded ? "Hide Full Essay" : "Read Full Essay"}
        </button>
      </div>

      {/* Full essay collapsible */}
      {expanded && (
        <div className="text-gray-700 leading-relaxed space-y-5">
          <p>
            Apple’s “Shot on iPhone” campaign, launched in 2015 and still
            circulating across billboards, television, and the web, seems
            deceptively simple: a curated stream of user-generated photos and
            videos. Its surface premise is familiar—ordinary people,
            extraordinary images—but the campaign’s persuasive force comes less
            from the images themselves than from the way they are framed and
            delivered. Through a deliberately minimalist visual style, a
            carefully pruned information architecture, and bounded interactive
            affordances, Apple transforms a gallery into an argument. …
          </p>

          {/* You can paste your full essay paragraphs here */}
          <p>
            Minimalism is the campaign’s most visible rhetorical device,
            functioning like an enthymeme. The oversized imagery, restrained
            typography, and abundant white space never explicitly declare
            “professional,” but they invite viewers to supply that judgment. …
          </p>

          <p>
            {/* Continue pasting the remaining paragraphs */}
            The campaign’s persuasiveness rests partly on kairos—its timeliness.
            It arrived as mobile-first image creation became a cultural default,
            as social feeds normalized the public display of private life, and
            as the line between amateur and professional blurred. …
          </p>

          <p className="italic text-sm text-gray-500">
            *AI Use Statement – I used AI (ChatGPT) for light brainstorming and
            minor editing support. All analysis, arguments, and interpretations
            are my own.*
          </p>
        </div>
      )}
    </section>
  );
}
