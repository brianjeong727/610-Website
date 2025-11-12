export default function Home() {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center py-24 px-6 animate-fadeIn">
      <h1 className="text-5xl font-bold mb-4">
        Reflections of <span className="text-accent">Composition</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        A portfolio exploring the relationship between digital rhetoric, creative design, and reflection.
      </p>
      <a
        href="#project1"
        className="mt-8 inline-block border border-accent text-accent px-6 py-3 rounded-md hover:bg-accent hover:text-white transition font-medium"
      >
        Explore Projects
      </a>
    </section>
  );
}
