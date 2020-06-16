// External imports
import React, { useContext } from 'react';

// Context imports
import ScreenSizeContext, { ScreenSize } from '@contexts/screensize';

// Local component imports
import ChatBubble, { Direction, Color } from '@utils/chatbubble';

const AcademicTextBubbbleMSc = (): JSX.Element => {
  const screenSize = useContext(ScreenSizeContext);

  const textMSc: string =
    '<p>Later, I frequented a Computer Engineering MSc to specialize in ' +
    '<h6><strong>Computer Graphics</strong></h6> and ' +
    '<h6><strong>Artificial Intelligence</strong>,</h6> ' +
    'and obtained fairly high grades! <br />' +
    "Unfortunately, due to personal reasons I couldn't conclude my dissertation.</p>";

  return (
    <ChatBubble
      direction={screenSize >= ScreenSize.lg ? Direction.Left : Direction.None}
      color={Color.White}
      innerHtml={textMSc}
    />
  );
};

export default AcademicTextBubbbleMSc;
