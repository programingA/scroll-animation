import FadeInSection from "../animations/FadeInSection";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="flex min-h-screen items-center justify-center bg-white px-6 text-black"
        >
            <FadeInSection className="text-center">
                <h2 className="text-4xl font-bold md:text-6xl">
                    About Section
                </h2>

                <p>
                    스크롤하면 아래에서 위로 등장합니다.
                </p>
            </FadeInSection>
        </section>
    )
}