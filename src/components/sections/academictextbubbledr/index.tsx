// External imports
import React, { useContext } from 'react';

// Context imports
import ScreenSizeContext, { ScreenSize } from '@contexts/screensize';

// Local component imports
import ChatBubble, { Direction, Color } from '@utils/chatbubble';

const AcademicTextBubbbleDr = (): JSX.Element => {
  const screenSize = useContext(ScreenSizeContext);

  const textDr: string =
    "<p>I've graduated in <h6><strong>Industrial Informatics</strong>,</h6> " +
    'which blends <h6><strong>Computer Engineering</strong></h6> ' +
    'and <h6><strong>Electronics</strong>,</h6> ' +
    'providing me with a wide array of tools and knowledge to work in different areas.</p>';

  let direction = Direction.None;

  if (screenSize >= ScreenSize.lg) {
    direction = Direction.Down;
  }

  if (screenSize >= ScreenSize.xl) {
    direction = Direction.DownRight;
  }

  return (
    <ChatBubble direction={direction} color={Color.White} innerHtml={textDr} />
  );
};

export default AcademicTextBubbbleDr;
