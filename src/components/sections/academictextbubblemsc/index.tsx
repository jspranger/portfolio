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

const AcademicTextBubbbleMSc = (props: IScreenSizeStatus): JSX.Element => {
  const textMSc: string =
    '<p>Later, I frequented the Computer Engineering MSc to specialize in ' +
    '<h6><strong>Computer Graphics</strong></h6> and ' +
    '<h6><strong>Artificial Intelligence</strong>,</h6> ' +
    'and obtained fairly high grades! <br />' +
    "Unfortunately, due to personal reasons I couldn't conclude my dissertation.</p>";

  const { isXlScreen, isLgScreen } = props;

  return (
    <ChatBubble
      direction={isXlScreen || isLgScreen ? Direction.Left : Direction.None}
      color={Color.White}
      innerHtml={textMSc}
    />
  );
};

export default AcademicTextBubbbleMSc;
