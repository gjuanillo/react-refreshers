import { useTypingEffect } from './useTypingEffect';

const TypingBanner: React.FC = () => {
  const phrases = [
    'Full Stack Developer',
    'AI Engineer',
    'Creative Technologist',
    'Lifelong Learner'
  ];

  const typedText = useTypingEffect(phrases, 80, 1200);

  return (
    <section style={{ fontFamily: 'monospace', fontSize: '1.5rem', margin: '2rem 0' }}>
      <span>{typedText}</span><span className="cursor">|</span>
    </section>
  );
};

export default TypingBanner;
