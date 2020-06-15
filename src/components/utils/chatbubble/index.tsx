// External imports
import React from 'react';

// Presentation imports
import '@utils/chatbubble/styles.scss';

enum Direction {
  None = 'n',
  Down = 'd',
  Left = 'l',
  Up = 'u',
  Right = 'r',
  DownLeft = 'dl',
  DownRight = 'dr',
  UpLeft = 'ul',
  UpRight = 'ur',
}

enum Color {
  Green = 'g',
  White = 'w',
}

interface ISelfProps {
  direction: Direction;
  color: Color;
  innerHtml: string;
}

const ChatBubble = (props: ISelfProps): JSX.Element => {
  const { direction, color, innerHtml } = props;

  return (
    <div
      className={`overlay chat-bubble chat-bubble-${direction}-${color}`}
      dangerouslySetInnerHTML={{ __html: innerHtml }}
    />
  );
};

export { Direction, Color };
export default ChatBubble;
