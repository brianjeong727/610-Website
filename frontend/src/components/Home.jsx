export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center py-32 px-6 animate-fadeIn"
    >

      {/* Subtle mint glow behind text */}
      <div className="absolute top-40 w-72 h-72 bg-accent/20 blur-3xl rounded-full -z-10"></div>

      <h1 className="text-6xl font-extrabold mb-6 tracking-tight text-gray-900">
        Reflections of <span className="text-accent">Composition</span>
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
        A digital portfolio exploring how ideas take shape through design,
        rhetoric, and creative experimentation. These works reflect how meaning
        — and identity — are built in online spaces.
      </p>

      <a
        href="#project1"
        className="mt-10 inline-block border border-accent text-accent px-8 py-4 rounded-lg 
        hover:bg-accent hover:text-white transition font-semibold shadow-sm hover:shadow-md"
      >
        Explore Projects
      </a>
    </section>
  );
}
