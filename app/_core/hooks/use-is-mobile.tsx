import { useState, useEffect } from 'react';

/**
 * Custom React hook to detect if the current viewport is mobile-sized.
 * Uses the `max-width: 768px` media query as the threshold for mobile.
 * 
 * @returns {boolean} `true` if the viewport is considered mobile.
 */
const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Initial check
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    // Listener for changes
    const handleChange = (event: MediaQueryListEvent): void => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;