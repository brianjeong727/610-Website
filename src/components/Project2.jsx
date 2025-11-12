import { useState } from "react";
import reflections from "../assets/reflections.png";

export default function Project2() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="project2"
      className="max-w-4xl mx-auto py-24 px-6 animate-fadeIn"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">
        Project 2: Reflections of Humanity
      </h2>

      {/* Artwork */}
      <img
        src={reflections}
        alt="Reflections of Humanity artwork"
        className="rounded-xl shadow-lg mx-auto mb-4"
      />
      <p className="text-sm text-gray-500 italic text-center mb-8">
        Figure 1. Reflections of Humanity — a digital composition exploring AI’s
        imitation of human creativity.
      </p>

      {/* Summary */}
      <p className="text-gray-700 leading-relaxed mb-6">
        <strong>Core Argument:</strong> While AI can imitate human thought and
        expression, it can never fully be human. Its understanding of emotion
        and consciousness is limited to imitation, not experience.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        The cracked mirror symbolizes AI’s fractured perception of humanity,
        contrasting cool blue tones of logic with warm light representing emotion
        and imperfection. This piece invites viewers to consider the limits of
        imitation and the enduring uniqueness of human creativity.
      </p>

      {/* Toggle Button */}
      <div className="text-center mb-6">
        <button
          onClick={() => setExpanded(!expanded)}
          className="border border-accent text-accent px-6 py-2 rounded-md hover:bg-accent hover:text-white transition font-medium"
        >
          {expanded ? "Hide Full Reflection" : "Read Full Reflection"}
        </button>
      </div>

      {/* Full reflection collapsible */}
      {expanded && (
        <div className="text-gray-700 leading-relaxed space-y-5">
          <p>
            My visual argument, <em>Reflections of Humanity</em>, explores the
            tension between artificial intelligence and human identity. The
            central argument of my piece is that while AI can imitate human
            thought and expression, it can never fully be human. Its
            understanding of emotion and consciousness is limited to imitation,
            not experience. The image shows a humanoid robot reaching toward a
            mirror that reflects a human version of itself on the other side.
            The cracked mirror serves as a visual metaphor for the limits of
            imitation, symbolizing how AI’s version of humanity is fractured and
            incomplete. My target audience includes students, creators, and
            those influenced by AI culture—particularly people who believe
            technology might replace creativity.
          </p>

          <p>
            I chose to make a visual argument because images can instantly
            communicate emotion and contrast in ways that words often cannot.
            The mirror functions as both literal and symbolic center of the
            composition, connecting two worlds: the cold, synthetic realm of the
            robot and the warm, organic world of its human reflection. I used
            color contrast as a primary rhetorical strategy: cool blue light on
            the AI side represents logic, precision, and detachment, while warm
            orange and gold tones on the human side evoke emotion,
            imperfection, and vitality. The crack running through the fingertips
            became the emotional focal point, visually communicating an
            unreachable connection. I also placed clocks showing the same time
            on both sides to symbolize how these realities coexist in parallel
            but never intersect.
          </p>

          <p>
            My process began with brainstorming ways to depict the relationship
            between AI and humanity without relying on clichés. Early ideas like
            an AI painting a human or holding a heart felt too literal. The
            mirror concept felt more intimate and reflective—literally and
            metaphorically. I began generating drafts with Google’s Gemini,
            experimenting with prompts to explore mood, symbolism, and lighting.
            Each revision clarified the message: AI can mirror our form, but not
            our feeling. Once the visual balance felt right, I refined
            brightness and framing in Photopea to create a natural light
            gradient. This iterative process deepened my understanding that
            strong digital rhetoric relies on repetition, precision, and
            revision, much like writing an essay.
          </p>

          <p>
            In analyzing my tools, I realized that crafting with AI is itself a
            rhetorical exercise. I guided Gemini through prompt engineering,
            learning that each phrase acted like syntax in a persuasive
            argument—shaping tone, contrast, and symbolism. I relied on language
            to direct emotion, not automation, which revealed how multimodal
            composition still depends on human intentionality. This experience
            affirmed my project’s message: AI can reproduce beauty, but it
            cannot originate meaning. True creativity—and true humanity—remain
            on our side of the mirror.
          </p>

          <p className="italic text-sm text-gray-500">
            *Acknowledgment of AI Use – I used Google Gemini for base image
            generation and ChatGPT (OpenAI GPT-5) for brainstorming and writing
            feedback. I focused primarily on prompt engineering rather than
            direct image editing.*
          </p>
        </div>
      )}
    </section>
  );
}
