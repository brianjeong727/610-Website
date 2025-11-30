import React from "react";
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
        Project 1: <span className="text-accent">“Shot on iPhone”</span> Rhetorical Analysis
      </h2>

      {/* GALLERY FRAME */}
      <div className="relative max-w-3xl mx-auto mb-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent rounded-2xl blur-[2px]" />

        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-4">
          <img
            src={apple}
            alt="Apple 'Shot on iPhone' billboard"
            className="rounded-xl w-full object-cover"
          />
        </div>

        <p className="text-sm text-gray-500 italic text-center mt-3">
          Shot on iPhone — minimalist visual rhetoric emphasizing composition, scale, and viewer participation.
        </p>
      </div>

      {/* SUMMARY INTRO */}
      <p className="text-gray-700 leading-relaxed mb-8 text-lg">
        Apple’s <em>“Shot on iPhone”</em> campaign uses minimalist design as rhetoric.
        Instead of telling viewers the iPhone camera is professional, the campaign
        creates an experience in which audiences draw that conclusion themselves.
        Through visual hierarchy, curation, and interface design, Apple positions
        everyday creators as artists and transforms a marketing campaign into a
        digital argument about taste, identity, and creative possibility.
      </p>

      {/* BUTTON */}
      <div className="text-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="border border-accent text-accent px-6 py-2 rounded-md hover:bg-accent hover:text-white transition font-medium"
        >
          {expanded ? "Hide Full Essay" : "Read Full Essay"}
        </button>
      </div>

      {/* FULL ESSAY — FULL LENGTH */}
      {expanded && (
        <div className="mt-16 p-8 rounded-2xl bg-white shadow-sm border border-accent/20">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-2 bg-accent rounded-full"></div>
            <h3 className="text-3xl font-bold text-accent">
              “Shot on iPhone” — Full Written Analysis
            </h3>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed text-[1.05rem]">

            <p>
              Apple’s “Shot on iPhone” campaign, launched in 2015 and still circulating
              across billboards, television, and the web, seems deceptively simple: a
              curated stream of user-generated photos and videos. Its surface premise is
              familiar—ordinary people, extraordinary images—but the campaign’s
              persuasive force comes less from the images themselves than from the way
              they are framed and delivered. Through a deliberately minimalist visual
              style, a carefully pruned information architecture, and bounded interactive
              affordances, Apple transforms a gallery into an argument. The campaign does
              not merely suggest that the iPhone camera is capable; it asks viewers to
              perform that conclusion themselves. In this way, the interface behaves
              rhetorically, fusing device capability with personal aspiration and
              positioning Apple as not just a phone manufacturer but as a cultural curator
              conferring legitimacy on everyday creators.
            </p>

            <p>
              Minimalism is the campaign’s most visible rhetorical device, functioning
              like an enthymeme. The oversized imagery, restrained typography, and
              abundant white space never explicitly declare “professional,” but they
              invite viewers to supply that judgment. By withholding clutter—no busy
              callouts, few captions, minimal typographic noise—the layout appropriates
              the conventions of museum display, where scale and silence signal
              importance. This aesthetic choice builds Apple’s ethos without a word; the
              brand looks disciplined and tasteful precisely because the site looks like a
              gallery. Pathos operates through the content itself: intimate family scenes,
              saturated city nights, impossible gradients at sunrise. Viewers feel awe or
              tenderness before encountering any copy, which is the point. Logos arrives
              through demonstration rather than specification: if these images were made
              on a phone, and those images are excellent, the device’s competence is
              proven by example. Minimalism is not decorative—it is the argument’s very
              form.
            </p>

            <p>
              This aesthetic discipline aligns with what Jessica Pressman calls “digital
              modernism,” the tendency for digital artifacts to borrow high-art
              minimalism as a way to legitimate themselves. Apple’s website and campaign
              visuals operate in exactly this register. By taking up the cues of art
              galleries and museums, the campaign implies that the iPhone belongs in a
              cultural conversation about art, not just in a marketplace for consumer
              electronics. In this sense, the very absence of detail—the refusal to
              clutter the screen with specs, features, or prices—becomes a way of
              elevating both the device and the user. The campaign’s rhetoric teaches its
              audience to read mobile photography through the lens of aesthetic
              refinement.
            </p>

            <p>
              The site’s information architecture amplifies this argument by shifting
              attention from hardware to outcomes. As Brian Carroll observes, digital
              structure is never neutral; it guides attention, flow, and task completion,
              shaping meaning in the process. “Shot on iPhone” exemplifies this principle
              by making creative scenarios—not specs—the first unit of meaning: night
              scenes, portraits, landscapes, macro textures. Navigation is shallow and
              predictable, reducing friction between admiration and exploration.
              Progressive disclosure tucks away technical detail behind a stable
              frontstage of images, short maker blurbs, and a clean path to “learn how”
              or “get the phone.” This structure reframes value: rather than asking “how
              many megapixels?,” the interface prompts “what could I make?” In this act of
              sorting, grouping, and sequencing, Apple performs its ethos as a cultural
              curator, not simply a vendor of devices.
            </p>

            <p>
              This architectural decision also participates in what Marche has described
              as a cultural shift from linear texts to digital forms designed around
              browsing and immersion. The website does not demand sequential reading;
              instead, it encourages grazing, pausing, and clicking through image clusters
              that reward curiosity. That style of navigation is familiar to anyone
              accustomed to Instagram or TikTok feeds, and Apple leans into it by
              ensuring each encounter with the site feels like a mini-feed of
              discoverable talent. The affordance of exploration mirrors the affordance of
              scrolling, which makes the campaign’s rhetoric especially resonant in a
              digital culture defined by feeds.
            </p>

            <p>
              Interactivity completes the persuasion, though within controlled limits.
              The campaign borrows the affect of participation—share buttons, creator
              notes, the sense that “you could be next”—while preserving editorial
              authority. Absent are open comments, remix tools, or variable display
              frames. These omissions are not oversights but strategies. The affordances
              guide a pathway—admire, learn, try, submit—without ceding control over what
              counts as exemplary. This asymmetry is rhetorically potent. It produces a
              feeling of communal authorship while ensuring Apple remains the arbiter of
              taste. Users are granted just enough agency to imagine themselves within the
              frame, but not enough to disrupt the frame itself.
            </p>

            <p>
              The campaign’s persuasiveness rests partly on kairos—its timeliness. It
              arrived as mobile-first image creation became a cultural default, as social
              feeds normalized the public display of private life, and as the line between
              amateur and professional blurred. Apple did not need to convince audiences
              that images mattered; it needed only to supply the instrument and the stage.
              Ethos accrues from Apple’s curatorial taste and the social proof of
              countless “ordinary” contributors. Pathos flows from the emotive content of
              the images and the desire to be seen. Logos crystallizes as a procession of
              examples functioning as evidence more effectively than any feature list.
              Together, these appeals turn the iPhone into an identity proposition:
              purchasing the device means joining a visible creative public.
            </p>

            <p>
              The campaign also operates as a pedagogy of taste. By spotlighting certain
              compositions, palettes, and genres, Apple implicitly teaches viewers how to
              see and what to imitate. The more users emulate this “house style,” the more
              their submissions align with the curatorial eye, creating a feedback loop
              that reproduces the aesthetic. Amateur creators are staged like
              professionals, while professional aesthetics are translated into accessible,
              replicable techniques. Recognition—placement on Apple’s platforms, social
              visibility, the halo of the brand—functions as both compensation and
              motivation. This loop turns the campaign into an identity engine: it
              promises belonging to a global, taste-forward community while scripting the
              performance of that belonging.
            </p>

            <p>
              Yet it also reveals the political economy of user-generated content. Every
              image that enters Apple’s frame becomes an advertisement. While creators
              gain visibility, Apple captures the bulk of economic value in sales,
              loyalty, and cultural capital. The asymmetry echoes wider concerns about
              digital labor: users produce cultural value for free, while corporations
              monetize their contributions. By foregrounding “ordinary” creators but
              folding them into a highly controlled brand environment, Apple demonstrates
              how contemporary platforms blur the line between participation and
              exploitation.
            </p>

            <p>
              The campaign’s portability across media reinforces its rhetorical
              coherence. Billboards distill the thesis into a single monumental image;
              television ads dramatize camera features through short narratives; the
              website integrates these moments into an environment where admiration can
              pivot into purchase. Across formats, the logic—minimalism, curation, bounded
              participation—remains stable. Consistency protects the argument from
              dilution and ensures that the persuasive grammar works whether encountered
              in a fleeting glance or a prolonged session. Even Apple keynotes often
              recycle “Shot on iPhone” images, situating them as evidence in live
              presentations, further extending the campaign’s rhetorical reach.
            </p>

            <p>
              Despite its polish, the campaign carries tensions. Its rhetoric of
              inclusivity—anyone can participate—sits alongside the economics of
              legibility, which favors images that read easily across cultures while
              sidelining context-heavy or experimental work. Its framing of authenticity
              downplays computational processing and post-production labor, attributing
              excellence to the phone alone. And its reliance on recognizable aesthetics
              risks eventual sameness, even as Apple refreshes surface proofs by
              highlighting new shooting scenarios. These frictions do not negate the
              campaign’s effectiveness but highlight its cultural costs. Empowerment and
              commodification are braided together; creativity is elevated while also
              enclosed within a corporate frame.
            </p>

            <p>
              This doubleness makes the campaign a useful case study in digital rhetoric.
              As Carroll insists, “information architecture is rhetoric,” and Apple’s
              architecture teaches a particular way of seeing: simplicity equals quality,
              participation equals recognition, and creation equals belonging. Yet those
              lessons also mask the infrastructural realities: computational imaging
              pipelines, corporate curation, and the asymmetrical distribution of
              economic value. To ignore those backstage elements is to miss the
              ideological force of the design, which makes corporate mediation appear as
              natural as artistry.
            </p>

            <p>
              “Shot on iPhone” demonstrates how design can operate rhetorically, shaping
              not just persuasion but identity. Minimalism works as a tacit syllogism,
              architecture as a pedagogy of attention, and interactivity as a velvet rope
              signaling community while preserving hierarchy. The campaign elevates
              everyday creators, teaches aesthetic norms, and stages authenticity, even as
              it commodifies participation and curates universality. This doubleness—
              empowerment entwined with enclosure—is characteristic of contemporary
              digital rhetoric. Apple’s achievement lies in rendering it so seamless that
              it feels inevitable. The company does not merely sell a phone; it curates a
              taste regime, scripts participation, and turns personal creativity into
              cultural capital. That is why “Shot on iPhone” remains persuasive: it shows
              how design becomes argument, and how argument quietly becomes identity in a
              culture where the device that captures our images is also the platform that
              stages them for the world.
            </p>

          </div>
        </div>
      )}
    </section>
  );
}
