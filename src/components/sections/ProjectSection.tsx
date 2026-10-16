import FadeInSection from "../animations/FadeInSection";

export default function ProjectSection() {
    return (
        <section
            id="projects"
            className="flex min-h-screen items-center justify-center bg-slate-900 px-6 text-white"
        >
            <FadeInSection className="text-center">
                <h2 className="text-4xl font-bold md:text-6xl">
                    Project Section
                </h2>

                <p className="mt-6 text-lg text-gray-400">
                    두 번째 스크롤 애니메이션입니다.
                </p>
            </FadeInSection>
        </section>
    )
}