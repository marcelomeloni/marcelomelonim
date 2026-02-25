// src/hooks/useTypewriter.js
import { useState, useEffect } from 'react';

export const useTypewriter = (phrases, typingSpeed = 150, deletingSpeed = 75, pauseDuration = 2000) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[loopIndex % phrases.length];

    if (isDeleting) {
      // Apagando
      setTypingDelay(deletingSpeed);
      timer = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
      }, typingDelay);
    } else {
      // Digitando
      setTypingDelay(typingSpeed);
      timer = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
      }, typingDelay);
    }

    // Lógica de transição
    if (!isDeleting && displayedText === currentPhrase) {
      // Terminou de digitar a frase, pausa antes de apagar
      setTypingDelay(pauseDuration);
      setIsDeleting(true);
    } else if (isDeleting && displayedText === '') {
      // Terminou de apagar, passa para a próxima frase
      setIsDeleting(false);
      setLoopIndex(loopIndex + 1);
      setTypingDelay(500); // Pequena pausa antes de começar a próxima
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopIndex, phrases, typingSpeed, deletingSpeed, pauseDuration, typingDelay]);

  return displayedText;
};