import { useState } from "react";
import reflections from "../assets/reflections.png";
import React from "react";

export default function Project2() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="project2"
      className="max-w-4xl mx-auto py-24 px-6 animate-fadeIn"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">
        Project 2: <span className="text-accent">Reflections of Humanity</span>
      </h2>

      {/* GALLERY FRAME */}
      <div className="relative max-w-3xl mx-auto mb-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent rounded-2xl blur-[2px]" />
        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-4">
          <img
            src={reflections}
            alt="Reflections of Humanity artwork"
            className="rounded-xl w-full object-cover"
          />
        </div>

        <p className="text-sm text-gray-500 italic text-center mt-3">
          <em>Reflections of Humanity</em> — a digital composition exploring AI’s
          fractured imitation of human emotion and identity.
        </p>
      </div>

      {/* SUMMARY INTRO */}
      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
        <strong>Core Argument:</strong> AI can mirror human expression but can’t
        embody lived experience. Through a cracked mirror motif, this piece
        contrasts the cold precision of artificial intelligence with the warmth
        and imperfection that make creativity human.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8 text-lg">
        The divided color palettes — cool blues for logic, warm golds for
        emotion — frame the question at the heart of the work: Can imitation
        ever equal understanding, or does meaning remain deeply, irreducibly
        human?
      </p>

      {/* BUTTON */}
      <div className="text-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="border border-accent text-accent px-6 py-2 rounded-md hover:bg-accent hover:text-white transition font-medium"
        >
          {expanded ? "Hide Full Reflection" : "Read Full Reflection"}
        </button>
      </div>

      {/* FULL REFLECTION — EXACT ESSAY, NO CHANGES */}
      {expanded && (
        <div className="mt-16 p-8 rounded-2xl bg-white shadow-sm border border-accent/20">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-2 bg-accent rounded-full" />
            <h3 className="text-3xl font-bold text-accent">
              Reflections of Humanity — Written Reflection
            </h3>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed text-[1.05rem] whitespace-pre-line">

            {`My visual argument, Reflections of Humanity, explores the tension between artificial intelligence and human identity. The central argument of my piece is that while AI can imitate human thought and expression, it can never fully be human. Its understanding of emotion and consciousness is limited to imitation, not experience. The image shows a humanoid robot reaching toward a mirror that reflects a human version of itself on the other side. The cracked mirror serves as a visual metaphor for the limits of imitation, symbolizing how AI’s version of humanity is fractured and incomplete. My target audience is made up of students, creators, and people who are influenced by or work with AI—especially those who believe technology might replace creativity. My purpose is to challenge that belief and remind viewers that even perfect imitation lacks the warmth, imperfection, and depth that make us human.

I chose to make a visual argument because images can instantly communicate emotion and contrast in ways that words often cannot. The mirror functions as both the literal and symbolic center of the composition, connecting two worlds: the cold, synthetic realm of the robot and the warm, organic world of its human reflection. I used color contrast as a primary rhetorical strategy. The cool blue light on the AI’s side represents logic, precision, and detachment, while the warm orange and gold tones on the human side evoke emotion, imperfection, and vitality. These opposing palettes create a sense of visual tension—a pathos-driven reminder that the human world carries a life and unpredictability the machine can’t replicate. The crack in the mirror, running through the fingertips where the two figures almost meet, became the emotional focal point. It visually communicates an unreachable connection—a logos-based representation of limitation. I also placed clocks showing the same time, 8:00 AM, in both spaces to symbolize how these two realities coexist in parallel but never truly intersect. Small details such as the robot’s mechanical environment versus the human’s textured, familiar setting further reinforce the contrast between sterile perfection and imperfect life.

My process began with brainstorming ways to depict the relationship between AI and humanity without relying on clichés. Early ideas like an AI painting a human or holding a heart felt too literal. The mirror concept felt more intimate and reflective—literally and metaphorically. I began generating drafts with Google’s Gemini, experimenting with prompts to explore mood, symbolism, and lighting. My first versions looked polished but emotionally empty, so I revised the prompts to emphasize contrast, humanity, and fracture. Each round of prompting brought the message into clearer focus: AI can mirror our form, but not our feeling. Once the visual balance felt right, I refined brightness and framing in Photopea to create a more natural light gradient. This iterative process deepened my understanding that strong digital rhetoric relies on repetition, precision, and revision, much like writing an essay.

In analyzing my tools, I realized that crafting with AI is itself a rhetorical exercise. I guided Gemini through prompt engineering, learning that each phrase acted like syntax in a persuasive argument—shaping tone, contrast, and symbolism. I relied on language to direct emotion, not automation, which revealed how multimodal composition still depends on human intentionality. Using Photopea for final adjustments required technical awareness of light balance and framing, but the rhetorical challenge lay in shaping meaning through description. The easiest part was experimenting with phrasing; the hardest was making the reflection feel emotionally authentic rather than mechanical. This process taught me that visual rhetoric, like writing, requires empathy, precision, and deliberate design.

Initial Gemini prompt:
“A humanoid robot standing before a cracked mirror, seeing a human face as its reflection. Soft, moody lighting, warm light on the reflected human side and cold blue light on the robot side. Highly detailed, realistic style. Symbolic of AI trying to understand humanity”

Final Gemini prompt:
“Hyper-realistic digital art of a humanoid robot standing before a cracked mirror. In the reflection, it’s a human with warm, emotional eyes and a gentle expression, mimicking the pose and action of the robot, while the real robot’s face is cold and mechanical and also has mechanical hair. The robot should also have the tattoos of ‘ChatGPT,’ ‘Gemini,’ and ‘AI’ written on it. Use contrasting lighting: warm golden light on the human reflection side and cool blue light on the robot side. Include fine detail in the cracked glass, soft reflections, and moody shadows. Make sure the background of the human looks like a normal bedroom. The robot’s background is the same bedroom in the human’s background but everything is a mechanical version. Make sure the image shows the entire background of the robot and what’s behind him to show the full reflection and contrast between the human’s background.”

Follow-up prompts:
“Make the robot’s side’s bed and furniture more mechanical.”
“Make the robot’s hair look similar to the human’s hair.”

These refinements clarified the emotional and visual contrast between the two sides of the mirror. I made minimal manual edits afterward, adjusting only brightness and framing. Most of the creative process involved reworking text prompts and analyzing how phrasing altered the composition’s rhetorical effect. Gemini’s visualization ability helped me explore symbolism and juxtaposition, but it also revealed AI’s limitations. Even when the image appeared realistic, it could not grasp the emotional intent without human direction. This experience affirmed my project’s message: AI can reproduce beauty, but it cannot originate meaning. True creativity—and true humanity—remain on our side of the mirror.`}

          </div>
        </div>
      )}
    </section>
  );
}
