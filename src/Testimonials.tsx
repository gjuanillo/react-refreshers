import { useState, useEffect, useRef } from 'react';

type Testimonial = {
    author: string;
    content: string;
    role: string;
};

interface TestimonialsProps {
    testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [testimonials.length]);

    const next = () => setIndex((i) => (i + 1) % testimonials.length);
    const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

    const { author, content, role } = testimonials[index];

    return (
        <section>
            <h2>What People Say</h2>
            <blockquote style={{ fontStyle: 'italic' }}>{`"${content}"`}</blockquote>
            <p>- {author}, {role}</p>
            <button onClick={prev}>⟵</button>
            <button onClick={next}>⟶</button>
        </section>
    );
};

export default Testimonials;
