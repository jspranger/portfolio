// External imports
import React from 'react';

enum ScreenSize {
  xs,
  sm,
  md,
  lg,
  xl,
}

const ScreenSizeContext = React.createContext({});
const ScreenSizeProvider = ScreenSizeContext.Provider;

export { ScreenSize, ScreenSizeProvider };
export default ScreenSizeContext;
