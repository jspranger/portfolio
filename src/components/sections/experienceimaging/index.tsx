// External imports
import React, { useContext } from 'react';

// Context imports
import ScreenSizeContext, { ScreenSize } from '@contexts/screensize';

const ExperienceImaging = (): JSX.Element => {
  const screenSize = useContext(ScreenSizeContext);
  const paragraphClasses = `text-md-right ${
    screenSize >= ScreenSize.md ? 'pr-3' : 'pl-3'
  } `;

  return (
    <p className={paragraphClasses}>
      After that, I began working with Medical Imaging, where I used and
      extended image processing libraries as support to develop strategies to
      extract information from medical images, as well as visualization
      libraries in order to provide various forms of 2D/3D visualization and
      interaction to users.
    </p>
  );
};

export default ExperienceImaging;
