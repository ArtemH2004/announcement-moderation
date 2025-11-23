import { useEffect } from 'react';

type HotkeyAction = 
  | 'approve'     // A - одобрить объявление
  | 'reject'      // D - отклонить объявление  
  | 'next'        // → - следующее объявление
  | 'prev'        // ← - предыдущее объявление
  | 'focus-search'; // / - фокус на поиск

type HotkeyCallbacks = {
  [K in HotkeyAction]?: (event: KeyboardEvent) => void;
};

export const useHotkey = (callbacks: HotkeyCallbacks) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || 
          event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'a':
        case 'A':
          if (callbacks.approve) {
            event.preventDefault();
            callbacks.approve(event);
          }
          break;
          
        case 'd':
        case 'D':
          if (callbacks.reject) {
            event.preventDefault();
            callbacks.reject(event);
          }
          break;
          
        case 'ArrowRight':
          if (callbacks.next) {
            event.preventDefault();
            callbacks.next(event);
          }
          break;
          
        case 'ArrowLeft':
          if (callbacks.prev) {
            event.preventDefault();
            callbacks.prev(event);
          }
          break;
          
        case '/':
          if (callbacks['focus-search']) {
            event.preventDefault();
            callbacks['focus-search'](event);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [callbacks]);
};