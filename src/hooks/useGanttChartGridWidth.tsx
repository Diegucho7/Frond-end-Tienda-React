import { useEffect, useState } from 'react';

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

const defaultGridWidth = 518;

export const useGanttChartGridWidth = () => {
  const [gridWidth, setGridWidth] = useState(defaultGridWidth);

  useEffect(() => {
    const updateWidth = () => {
      let width = defaultGridWidth;
      const win = window.innerWidth;

      if (win <= breakpoints.sm) width = 200;
      else if (win <= breakpoints.md) width = 280;
      else if (win <= breakpoints.lg) width = 300;
      else if (win <= breakpoints.xl) width = 420;

      setGridWidth(width);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return gridWidth;
};
