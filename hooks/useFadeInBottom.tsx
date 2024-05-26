import { useEffect, useRef, useState } from "react";

function useFadeInBottom(triggerPoint = "-20%") {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!isIntersecting && entry.isIntersecting) {
                    setIsIntersecting(true);
                }
            },
            {
                rootMargin: `0px 0px ${triggerPoint} 0px`
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [isIntersecting, triggerPoint]);

    return { ref, isIntersecting };
}

export default useFadeInBottom;
