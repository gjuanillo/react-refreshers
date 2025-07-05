import { useEffect, useState } from 'react';

export function useTypingEffect(words: string[], speed = 100, delay = 1500) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayedText.length < words[wordIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + words[wordIndex].charAt(prev.length));
        }, speed);
      } else {
        timeout = setTimeout(() => setTyping(false), delay);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayedText('');
        setTyping(true);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typing, wordIndex, words, speed, delay]);

  return displayedText;
}
