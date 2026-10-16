import { useRef } from 'react';
import { gsap, useGSAP } from "../../lib/gsap";

export default function ZoomSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if(!sectionRef.current || !imageRef.current) return;

            gsap.fromTo(
                imageRef.current,
                {
                    scale: 0.6,
                    borderRadius: "24px",
                },
                {
                    scale: 1,
                    borderRadius: "0px",
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "+=100%",
                        scrub: true,
                        pin: true,
                        invalidateOnRefresh: true,
                    },
                }
            );
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="relative flex h-screen items-center justify-center overflew-hidden bg-black"
        >
            <div
                ref={imageRef}
                className="h-full w-full overflow-hidden"
            >
                <img 
                    src="/images/landscap.jpg" 
                    alt="Landscape"
                    className="h-full w-full object-cover" 
                />
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <h2 className="text-center text-5xl font-bold text-white md:text-7xl">
                    Explore Beyond
                </h2>
            </div>
        </section>
    )
}