// External imports
import React, { useContext } from 'react';

// Context imports
import ScreenSizeContext, { ScreenSize } from '@contexts/screensize';

// Local component imports
import ChatBubble, { Direction, Color } from '@utils/chatbubble';

const AcademicTextBubbleCert = (): JSX.Element => {
  const screenSize = useContext(ScreenSizeContext);

  const textCert: string =
    '<p>Other than that, I keep updating my skills with online courses in ' +
    'new and exciting technologies!</p>';

  return (
    <ChatBubble
      direction={screenSize >= ScreenSize.lg ? Direction.Up : Direction.None}
      color={Color.White}
      innerHtml={textCert}
    />
  );
};

export default AcademicTextBubbleCert;
