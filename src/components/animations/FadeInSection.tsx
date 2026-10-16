import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

interface FadeInSectionProps {
    children: ReactNode;
    className?: string;
}

export default function FadeInSection({
    children,
    className = "",
}: FadeInSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!sectionRef.current) return;

            gsap.fromTo(
                sectionRef.current,
                {
                    opacity: 0,
                    y: 80,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                        end: "top 40%",
                        scrub: true,
                    },
                }
            );
        },
        { scope: sectionRef }
    );

    return (
        <div ref={sectionRef} className={className}>
            {children}
        </div>
    );
}