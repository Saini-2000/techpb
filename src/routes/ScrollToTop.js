// ScrollToTop.js
import { useLayoutEffect,useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(()=>{
    const timeout = setTimeout(()=>{

        window.scrollTo(0,0);
    },500)
    return () => clearTimeout(timeout)
  },[])

  return null;
};

export default ScrollToTop;
