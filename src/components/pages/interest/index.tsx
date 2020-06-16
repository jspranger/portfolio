// External imports
import React, { useContext } from 'react';
import ReactDOMServer from 'react-dom/server';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

// Context imports
import ScreenSizeContext, { ScreenSize } from '@contexts/screensize';

// Local component imports
import '@pages/interest/styles.scss';
import avatar from '@pages/interest/images/avatar-interest.svg';
import java from '@pages/interest/images/java.png';
import android from '@pages/interest/images/android.png';
import csharp from '@pages/interest/images/csharp.png';
import matlab from '@pages/interest/images/matlab.png';
import php from '@pages/interest/images/php.png';
import ruby from '@pages/interest/images/ruby.png';

import cpp from '@pages/interest/images/cpp.png';
import qt from '@pages/interest/images/qt.png';
import git from '@pages/interest/images/git.png';
import opencv from '@pages/interest/images/opencv.png';
import itk from '@pages/interest/images/itk.png';
import vtk from '@pages/interest/images/vtk.png';

import python from '@pages/interest/images/python.png';

import nodejs from '@pages/interest/images/nodejs.png';
import docker from '@pages/interest/images/docker.png';
import jenkins from '@pages/interest/images/jenkins.png';
import react from '@pages/interest/images/react.png';
import redux from '@pages/interest/images/redux.png';
import typescript from '@pages/interest/images/typescript.png';
import jest from '@pages/interest/images/jest.png';
import ImageCard from '@utils/imagecard';

const Interest = (): JSX.Element => {
  const screenSize = useContext(ScreenSizeContext);
  const containerClasses = `d-flex flex-column ${
    screenSize > ScreenSize.sm ? 'w-75' : 'w-100'
  }`;

  const collegeTools = [java, android, csharp, matlab, php, ruby];
  const workTools = [cpp, qt, git, opencv, itk, vtk];
  const latestTools = [nodejs, docker, jenkins, react, redux, typescript, jest];

  const pythonDescription = `I absolutely love <span>${ReactDOMServer.renderToStaticMarkup(
    <Image src={python} className="smaller-tool-container" />
  )}</span> for R&amp;D and fast prototyping due to the amount of
  available scientific libraries!`;

  return (
    <Row
      noGutters
      xs={1}
      className="interest w-100 h-100 d-flex flex-column justify-content-center align-items-center"
    >
      <Col className={containerClasses}>
        <Row noGutters xs={1} md={1} lg={1} xl={1} className="flex-grow-1">
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <Jumbotron fluid className="flex-grow-1 w-100 interest-container">
              <Container className="p-0 h-100">
                <Row
                  noGutters
                  sm={1}
                  md={1}
                  lg={2}
                  xl={2}
                  className="h-100 d-flex flex-column justify-content-center align-items-center"
                >
                  <Col
                    lg={11}
                    xl={11}
                    className="d-flex flex-column justify-content-center align-items-center"
                  >
                    <Row noGutters xs={1} lg={2} className="w-100">
                      <Col>
                        <ImageCard
                          images={collegeTools}
                          imageStyle="tool-container"
                          description="During University, I had the chance to work with, among others, the following languages and frameworks:"
                        />
                      </Col>
                      <Col>
                        <ImageCard
                          images={workTools}
                          imageStyle="tool-container"
                          description="Throughout my career, I mostly developed Desktop and Embedded Applications using"
                        />
                      </Col>
                      <Col>
                        <Row
                          noGutters
                          className="flex-grow-1 d-flex flex-column justify-content-center align-items-center"
                        >
                          <Col>
                            <ImageCard description={pythonDescription} />
                          </Col>
                          <Col className="d-flex flex-column justify-content-center align-items-center">
                            <Image
                              className="interest-avatar m-3 d-none d-lg-block"
                              src={avatar}
                              roundedCircle
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <ImageCard
                          images={latestTools}
                          imageStyle="tool-container"
                          description="More recently, I've been fully focused on web development and continuous integration"
                          footer="and I'm <em><strong>loving every second of it!</strong></em>"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Interest;
