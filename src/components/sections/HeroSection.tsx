export default function HeroSection() {
    return (
        <section
            id="home"
            className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-white"
        >
            <h1 className="text-center text-5xl font-bold md:text-7xl">
                Scroll Experience
            </h1>

            <p className="mt-6 text-lg text-gray-400">
                React + TypeScript + GSAP
            </p>

            <a 
                href="#about"
                className="mt-12 rounded-full border border-white px-6 py-3 transition-colors hover:bg-white hover:text-black"
            >
                Scroll Down ↓
            </a>
        </section>
    );
}