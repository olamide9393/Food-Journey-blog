import React, { useState, useEffect } from 'react';

const ScrollUP = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 200px
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top">
          Scroll to Top
        </button>
      )}
    </div>
  );
};

export default ScrollUP;
