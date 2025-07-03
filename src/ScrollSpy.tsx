import { useLayoutEffect, useRef, useState } from 'react';

interface ScrollSpyProps {
  sectionIds: string[]; // array of IDs like ['about', 'projects', 'contact']
}

const ScrollSpy: React.FC<ScrollSpyProps> = ({ sectionIds }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useLayoutEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
          break;
        }
      }
    };

    const options = {
      root: null,
      rootMargin: '0px 0px -70% 0px', // triggers earlier while scrolling down
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observerRef.current?.unobserve(el);
      });
    };
  }, [sectionIds]);

  return (
    <nav style={{ position: 'fixed', top: 20, left: 20 }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {sectionIds.map((id) => (
          <li key={id} style={{ margin: '4px 0' }}>
            <a
              href={`#${id}`}
              style={{
                color: activeId === id ? 'blue' : 'black',
                fontWeight: activeId === id ? 'bold' : 'normal',
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ScrollSpy;
