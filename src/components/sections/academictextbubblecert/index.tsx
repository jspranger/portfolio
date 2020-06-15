// External imports
import React from 'react';

// Presentation imports
import ChatBubble, { Direction, Color } from '@utils/chatbubble';

interface IScreenSizeStatus {
  isXlScreen?: boolean;
  isLgScreen?: boolean;
  isMdScreen?: boolean;
  isSmScreen?: boolean;
}

const AcademicTextBubbleCert = (props: IScreenSizeStatus): JSX.Element => {
  const textCert: string =
    '<p>Other than that, I keep updating my skills with online courses in ' +
    'new and exciting technologies!</p>';

  const { isXlScreen, isLgScreen } = props;

  return (
    <ChatBubble
      direction={isXlScreen || isLgScreen ? Direction.Up : Direction.None}
      color={Color.White}
      innerHtml={textCert}
    />
  );
};

export default AcademicTextBubbleCert;
