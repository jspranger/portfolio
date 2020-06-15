import React, { useState } from 'react';
import Fade from 'react-bootstrap/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

// Presentation imports
import '@utils/scrolluptotop/styles.scss';

const ScrollUpToTop = (): JSX.Element => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollHeight = () => {
    setShowScroll(window.pageYOffset > 400);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', checkScrollHeight);

  return (
    <Fade in={showScroll}>
      <FontAwesomeIcon
        className="scroll-top-button"
        icon={faChevronCircleUp}
        onClick={scrollTop}
      />
    </Fade>
  );
};

export default ScrollUpToTop;
