import { useEffect, useState } from 'react';

type TypewriterHookProps = {
  duration?: number;
  reverseDuration?: number;
};

const useTypewriter = ({ duration = 1000, reverseDuration }: TypewriterHookProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState<'forwards' | 'reverse' | null>(null);

  useEffect(() => {
    if (isTyping === null) return;

    const intervalDuration = (isTyping === 'reverse' && reverseDuration ? reverseDuration : duration) / text.length;

    const interval = setInterval(() => {
      if (isTyping === 'reverse' && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
        return;
      }

      if (isTyping === 'forwards' && currentIndex < text.length) {
        setCurrentIndex((prev) => prev + 1);
        return;
      }

      setIsTyping(null);
      clearInterval(interval);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [currentIndex, duration, isTyping, reverseDuration, text]);

  const startTyping = (text: string) => {
    setText(text);
    setCurrentIndex(0);
    setIsTyping('forwards');
  };

  const reverseTyping = (text: string) => {
    setText(text);
    setCurrentIndex(text.length);
    setIsTyping('reverse');
  };

  const currentText = text.substring(0, currentIndex);

  return { currentText, startTyping, reverseTyping };
};

export default useTypewriter;
