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

const AcademicTextBubbbleDr = (props: IScreenSizeStatus): JSX.Element => {
  const textDr: string =
    "<p>I've graduated in <h6><strong>Industrial Informatics</strong>,</h6> " +
    'which blends <h6><strong>Computer Engineering</strong></h6> ' +
    'and <h6><strong>Electronics</strong>,</h6> ' +
    'providing me with a wide array of tools and knowledge to work in different areas.</p>';

  const { isXlScreen, isLgScreen } = props;

  let direction = Direction.None;

  if (isLgScreen) {
    direction = Direction.Down;
  }

  if (isXlScreen) {
    direction = Direction.DownRight;
  }

  return (
    <ChatBubble direction={direction} color={Color.White} innerHtml={textDr} />
  );
};

export default AcademicTextBubbbleDr;
