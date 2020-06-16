// External imports
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Context imports
import ScreenSizeContext, { ScreenSize } from '@contexts/screensize';

// Local component imports
import '@pages/experience/styles.scss';
import imageDescriptionList from '@pages/experience/imageDescriptionList';
import ImageCarousel, { IImageInfo } from '@utils/imagecarousel';
import ExperienceHardware from '@sections/experiencehardware';
import ExperienceImaging from '@sections/experienceimaging';

const Experience = (): JSX.Element => {
  const screenSize = useContext(ScreenSizeContext);
  const containerClasses = `flex-grow-1 ${
    screenSize > ScreenSize.lg ? 'w-75' : 'w-100'
  }`;

  return (
    <Row
      noGutters
      xs={1}
      className="experience w-100 h-100 d-flex flex-column justify-content-center align-items-center"
    >
      <Col className="experience-overlay flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <Row noGutters xs={1} className={containerClasses}>
          <Col className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
            <Row noGutters xs={1} lg={2} className="w-100">
              <Col lg={2} className="d-none d-lg-block" />
              <Col
                lg={8}
                className="left-border-green pl-3 d-flex flex-column justify-content-center align-items-start"
              >
                <div className="mt-4 mb-3">
                  <ExperienceHardware />
                </div>
              </Col>
              <Col lg={2} className="d-none d-lg-block " />
            </Row>

            <Row noGutters xs={1} lg={3} className="flex-grow-1 w-100">
              <Col lg={2} className="d-none d-lg-block" />
              <Col
                lg={8}
                className="experience-image-background d-flex flex-column justify-content-center align-items-center"
              >
                <ImageCarousel
                  imageInfos={imageDescriptionList.map(
                    (imgDesc) =>
                      ({
                        title: imgDesc.title,
                        description: imgDesc.description,
                        image: imgDesc.image,
                      } as IImageInfo)
                  )}
                />
              </Col>
              <Col lg={2} className="d-none d-lg-block" />
            </Row>

            <Row noGutters xs={1} lg={2} className="w-100">
              <Col lg={2} className="d-none d-lg-block " />
              <Col
                lg={8}
                className="right-border-green d-flex flex-column justify-content-center align-items-end"
              >
                <div className="mt-3 mb-4">
                  <ExperienceImaging />
                </div>
              </Col>
              <Col lg={2} className="d-none d-lg-block " />
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Experience;

/*


          </Col>
          <Col className="d-none d-lg-block "></Col>
          <Col
            lg={10}
            xl={10}
            className="left-border-green pl-3 d-flex flex-column justify-content-center align-items-start"
          >
            <Col
              lg={2}
              xl={2}
              className="d-flex flex-column justify-content-center align-items-center"
            ></Col>

            <ExperienceHardware />
          </Col>
          <Col className="flex-grow-1 d-flex flex-column justify-content-center align-items-center"></Col>
          <Col
            lg={10}
            xl={10}
            className="right-border-green d-flex flex-column justify-content-center align-items-end"
          >
            <ExperienceImaging />
          </Col>
          <Col
            lg={2}
            xl={2}
            className="d-flex flex-column justify-content-center align-items-center"
          >
*/
