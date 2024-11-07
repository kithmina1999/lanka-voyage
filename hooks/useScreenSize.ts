import { useEffect, useState } from "react";

const useScreenSize = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 1024); // Set your breakpoint here (e.g., 768px for small screens)
      };
  
      window.addEventListener("resize", handleResize);
      handleResize(); // Call initially to set the state correctly on mount
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return isSmallScreen;
  };

  export default useScreenSize