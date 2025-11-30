import { useState } from "react";
import React from "react";

export default function ReflectiveEssay() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="essay"
      className="max-w-4xl mx-auto py-24 px-6 animate-fadeIn"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">
        Reflective Essay
      </h2>

      <p className="text-gray-700 leading-relaxed mb-8 text-lg">
        This reflective essay synthesizes my learning across the semester, analyzing how each project
        deepened my understanding of digital rhetoric, multimodal design, and ethical collaboration
        with AI.
      </p>

      {/* Button */}
      <div className="text-center mb-6">
        <button
          onClick={() => setExpanded(!expanded)}
          className="border border-accent text-accent px-6 py-2 rounded-md hover:bg-accent hover:text-white transition font-medium"
        >
          {expanded ? "Hide Full Essay" : "Read Full Essay"}
        </button>
      </div>

      {/* FULL ESSAY — Project 1 style */}
      {expanded && (
        <div className="mt-16 p-8 rounded-2xl bg-white shadow-sm border border-accent/20">
          
          {/* Left accent bar + title */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-2 bg-accent rounded-full" />
            <h3 className="text-3xl font-bold text-accent">
              Reflective Essay — Full Written Reflection
            </h3>
          </div>

          <div className="space-y-10 text-gray-700 leading-relaxed text-[1.05rem]">

            {/* --- ENTIRE ESSAY, UNCHANGED --- */}

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Introduction: Learning to Compose Through Design
              </h3>
              <p>
                At the start of this semester, I thought digital composition meant learning how to use the tools,
                how to edit an image, format a webpage, or layer sound. What I discovered instead was that digital
                composition is about designing meaning. Every font, color, and line of code participates in an
                argument. This course taught me that composing in digital media is not just technical production
                but rhetorical creation, a process that requires reflection, curation, and intention.
              </p>
              <p>
                Across my three major projects, I learned how visual and structural choices shape understanding.
                Project 1, my rhetorical analysis of Apple’s “Shot on iPhone” campaign, revealed that design
                itself can persuade. Project 2, Reflections of Humanity, transformed that theory into practice as I
                used imagery, light, and contrast to explore the boundary between human and artificial intelligence.
                Finally, in Project 3, this web portfolio, I synthesized those lessons into a cohesive digital identity.
              </p>
              <p>
                Together, these works trace my development from an observer of digital rhetoric into an intentional
                designer of it. The portfolio’s minimalist aesthetic, mint accent palette, and clear navigation reflect
                my commitment to clarity, emotional resonance, and ethical transparency. What I ultimately learned
                is that digital composition is a conversation between the human and the technological, between
                creativity and control, reflection and automation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Analytical Foundations: Seeing Design as Argument
              </h3>
              <p>
                My first project, Apple’s “Shot on iPhone” Rhetorical Analysis, was where I learned to read digital
                design the way one reads an essay. At first glance, Apple’s campaign looks simple, a grid of striking
                images taken by ordinary users. But as I applied concepts from Brian Carroll’s Writing for Digital Media
                and Jessica Pressman’s writing on digital modernism, I realized that the site’s minimalism was more
                than an aesthetic choice. It was an argument about quality, authority, and belonging.
              </p>
              <p>
                Carroll’s line, “information architecture is rhetoric,” became my anchor. Apple’s layout, the clean lines,
                restrained typography, and abundant white space, did more than showcase photos, it taught audiences
                how to see. The very absence of clutter functioned as ethos. It told the viewer that this brand
                understood taste, precision, and hierarchy. The campaign’s structure guided users away from hardware
                specs and toward human outcomes, a quiet redirection of focus that made creativity the product.
              </p>
              <p>
                Pressman’s concept of digital modernism helped me understand Apple’s cultural strategy: borrowing
                the aesthetic of high art to legitimize digital technology. By treating everyday images as gallery pieces,
                Apple blurred the line between professional and amateur, turning ordinary users into cultural
                participants. That realization reshaped how I understood rhetoric in the digital age. It is not confined
                to text or speech, it lives in interface design, navigation, and even silence.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Creative Practice: Translating Theory into Image
              </h3>
              <p>
                Moving from analysis to creation in Project 2 felt like crossing the line between critic and composer.
                My piece, Reflections of Humanity, began as a response to the growing presence of AI in creative spaces.
                The image shows a humanoid robot reaching toward a cracked mirror that reflects a human version of itself.
                The fractured surface represents the limits of imitation, AI can mirror our form but not our emotion.
              </p>
              <p>
                I applied what I had learned from Project 1 to visual design. Minimalism, contrast, and framing became
                rhetorical tools rather than aesthetic ones. The composition’s left side, illuminated in cold blue light,
                symbolizes logic and artificiality, while the warm, golden tones on the right side signify imperfection and
                empathy. Between them, the crack splits the image at the fingertips, a literal and metaphorical fracture
                that embodies the divide between machine imitation and human experience.
              </p>
              <p>
                This project taught me that form creates meaning. Just as Apple’s layout guided user perception, my use
                of light and symmetry guided emotional interpretation. The process of iteration—revising color balance,
                adjusting shadows, and refining symbolic detail—became a kind of visual essay writing. I began to
                understand McCloud’s idea of closure, how viewers fill in gaps with their own perception. I used that
                principle intentionally, allowing the viewer to complete the meaning themselves.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Portfolio Design Philosophy: Mint, Minimalism, and Meaning
              </h3>
              <p>
                Building my web portfolio was where all my learning converged. I wanted the site to feel like an extension
                of my reflective process, not just a container for projects but a cohesive argument about who I am as a
                digital composer. Every design choice was intentional and rhetorical.
              </p>
              <p>
                The site uses a dark, sleek layout accented with mint tones. The color mint represents growth, clarity,
                and renewal, qualities that mirror how I have evolved as a creator. Against the dark background, the
                mint text and highlights create a sense of calm professionalism. This choice also functions rhetorically,
                the high contrast ensures readability while symbolizing reflection, the theme running through all my work.
              </p>
              <p>
                The minimalist interface, inspired by both Apple’s design and my own Project 1 analysis, foregrounds content
                while letting space breathe. Each page centers a single project, balancing imagery and text with controlled
                whitespace. The goal was to reproduce the emotional restraint that made Apple’s campaign persuasive but to
                reframe it as self-expression rather than corporate branding.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Collaboration and Critique: Rhetoric in the Age of AI
              </h3>
              <p>
                Throughout this course, I used AI tools, ChatGPT and Gemini, as collaborators, not creators. Their role in
                my process has made me think deeply about authorship, agency, and transparency in digital composition.
              </p>
              <p>
                AI’s assistance was most valuable for brainstorming and problem-solving. ChatGPT helped me rephrase ideas,
                refine syntax, and visualize layout possibilities in React and TailwindCSS. Gemini allowed me to externalize
                concepts visually, generating starting points for my artwork. Yet both tools revealed the same truth, their
                power depends entirely on human intentionality.
              </p>
              <p>
                Writing prompts became rhetorical acts. Every choice of phrasing shaped the outcome just as syntax shapes
                meaning in text. For instance, asking Gemini to produce a cracked mirror reflecting a human version of a robot
                was not simply a command but a rhetorical performance of metaphor. I learned to be precise, iterative, and
                self-aware. When an AI misinterpreted my prompt, I realized it was following my logic too literally. The gap
                between human intuition and algorithmic execution became a reminder that creativity lives in the space
                between prompt and product.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Metacognitive Growth: From Consumption to Composition
              </h3>
              <p>
                Looking back, I realize that my biggest transformation this semester was learning to see digital media as a
                series of rhetorical decisions. Before this class, I consumed media without analyzing how it shaped me. Now,
                I recognize how every design, from Apple’s gallery layout to a TikTok interface, scripts user behavior and
                emotion.
              </p>
              <p>
                My progression across the projects mirrors that shift from awareness to agency. Project 1 taught me to dissect
                how digital forms persuade. Project 2 taught me to do persuasion through multimodal design. Project 3 taught me
                to curate and explain that process, turning reflection into a visual argument about identity.
              </p>
              <p>
                This iterative learning also changed my writing habits. I became more deliberate about structure and more
                attentive to flow, not just of sentences but of attention. I learned to write visually, to imagine how readers
                scroll, pause, and process. That awareness carried into my coding, where margins, animations, and line breaks
                became compositional tools.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Looking Forward: Ethical Creativity and Digital Identity
              </h3>
              <p>
                As I move beyond this course, I want to continue developing as both a technical and ethical digital creator. I
                have learned that composing online means participating in a shared visual culture where authorship is distributed
                and visibility is power. My goal is to create work that remains mindful of that responsibility, designs that
                respect audience agency, foreground accessibility, and value authenticity over spectacle.
              </p>
              <p>
                This portfolio marks the first time I have seen my analytical and creative identities converge. My computer
                science background teaches me logic and structure, and this course taught me how to fill that structure with
                meaning. I now see code and composition as parallel practices, both require clarity, empathy, and iteration.
              </p>
              <p>
                In future projects, whether in software design, UX research, or digital storytelling, I plan to continue blending
                rhetorical awareness with technical skill. I want to create systems and interfaces that not only function but
                communicate ethically, designs that remind users of what makes us human.
              </p>
              <p>
                Ultimately, the most valuable lesson I am taking from this class is that to compose is to reflect. Digital media
                may change the tools we use, but not the purpose of creation, to make meaning. Every color, paragraph, and prompt
                becomes a mirror, one that reveals both the creator and the culture that shaped them.
              </p>
            </div>

            <p className="italic text-sm text-gray-500">
              Acknowledgment of AI Use: I used OpenAI’s ChatGPT (GPT-5) and Google’s Gemini as collaborative tools in
              brainstorming and revision. ChatGPT helped structure sections, identify transitions, and clarify phrasing in early
              drafts. Gemini assisted with visual concept exploration for Reflections of Humanity. I critically evaluated all AI
              output, integrating only language or ideas that aligned with my intent. All core analysis, argumentation, and
              reflection are my own.
            </p>

          </div>
        </div>
      )}
    </section>
  );
}
