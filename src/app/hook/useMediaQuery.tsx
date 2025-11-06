
import { useEffect, useState } from "react";


const useMediaQuery = (breakpoint: number) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const handleChange = () => {
      setMatches(mediaQuery.matches);
    };

    handleChange(); // сразу обновляем значение при монтировании компонента

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [breakpoint]); // зависимость только от breakpoint

  return matches;
};


export default useMediaQuery;
