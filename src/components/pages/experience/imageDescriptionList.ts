import counterCircuit from '@pages/experience/images/counter-circuit.png';
import anticarjackingCircuit from '@pages/experience/images/anticarjacking-circuit.png';
import anticarjackingBoard from '@pages/experience/images/anticarjacking-board.png';
import anticarjackingMap from '@pages/experience/images/anticarjacking-map.png';
import carinatumForce from '@pages/experience/images/carinatum-force.png';
import medboxCad from '@pages/experience/images/medbox-cad.png';
import medboxBoards from '@pages/experience/images/medbox-boards.png';
import medboxConstruction from '@pages/experience/images/medbox-construction.png';
import medboxWorking from '@pages/experience/images/medbox-working.png';
import kuidPrototype from '@pages/experience/images/kuid-prototype.png';
import kuidSoftware from '@pages/experience/images/kuid-software.png';
import segmentationView from '@pages/experience/images/segmentation-view.png';
import segmentationPython from '@pages/experience/images/segmentation-python.png';
import stlCleanup from '@pages/experience/images/stl-cleanup.png';

interface ImageDescription {
  title: string;
  description: string;
  image: string;
}

const imageDescriptionList: ImageDescription[] = [
  {
    title: 'Down Count Trigger',
    description:
      'Hardware module programmed in Assembly, with a PIC microcontroller that drives ' +
      'seven-segment displays, using multiplexing, to display a second by second down count. ' +
      'Once 0 is reached it emits visual and audio alerts, and activates ' +
      'an elecro-mechanical switch that can be used for generic purposes.',
    image: counterCircuit,
  },
  {
    title: 'Anti-Carjacking Circuit',
    description:
      'Low cost AVR microcontroller based device capable of receiving SMS requests ' +
      'and not only respond with its current coordinates, but also turn off the vehicle. ' +
      'It interacts with both GSM and GPS modules using an event/interruption based logic, ' +
      'which allows it to gather all required information while keeping low power consumption.',
    image: anticarjackingCircuit,
  },
  {
    title: 'Anti-Carjacking Board Design',
    description:
      '3D rendering of the proposed design for the circuit board of the Anti-Carjacking device.',
    image: anticarjackingBoard,
  },
  {
    title: 'Anti-Carjacking Map Tracker',
    description:
      'Software built to track the coordinates gathered from the Anti-Carjacking device. ' +
      'It imports the messages directly from a phone using Hayes command set through a serial connection, ' +
      'and then filters the information through RegEx. Through integration with a maps API, it displays ' +
      'the most likely routes taken by the vehicle.',
    image: anticarjackingMap,
  },
  {
    title: 'Pectus Carinatum Pressure Meter',
    description:
      'This USB device, powered by a 3V lithium battery, measures the force applied to the chest ' +
      'by a Pectus Carinatum correction bar. It uses a force sensing resistor, ' +
      'and displays the value in a small Nokia 5110 LCD. It is controlled by an AVR microcontroller, ' +
      'and sleep modes and interruptions maintain its low power consumption.',
    image: carinatumForce,
  },
  {
    title: 'Medbox Prototype',
    description:
      'CAD design for an automatic medicine dispenser for the elderly. ' +
      'It contains multiple sections that can be recharged with medication, ' +
      'a motor to spin the sections and a dispenser tube for the pills to fall. ' +
      'An embedded system is responsible for controlling its operation.',
    image: medboxCad,
  },
  {
    title: 'Medbox Boards',
    description:
      'Printed Circuit Boards for the embedded system to communicate with various hardware modules, ' +
      'ranging from the pill detection system to display driver, sensors and actuators.',
    image: medboxBoards,
  },
  {
    title: 'Medbox Main Module',
    description:
      'Controller board that provides the functionality to the pill dispenser module. ' +
      'User interaction is achieved by means of a touch screen.',
    image: medboxConstruction,
  },
  {
    title: 'Medbox System',
    description:
      'Pill dispenser system with an intuitive UI that shows medication scheduling, alerts upon time ' +
      'and requires user confirmation to drop the pills. And in addition, a separate portable module ' +
      'that synchronizes the scheduling with the main module and alerts through vibration.',
    image: medboxWorking,
  },
  {
    title: 'Quid Box Prototype',
    description:
      'Multimodal device capable of recognizing commands through speech and gestures, and overlays the ' +
      'television signal with a custom interface. It allows to change channel and volume, as well as running ' +
      'custom applications such as games, video and audio player, or videoconferencing.',
    image: kuidPrototype,
  },
  {
    title: 'Quid Software',
    description:
      'UI example of a movie library overlayed upon the television channel, and a fullscreen movie player. ' +
      'In addition to speech and gestures for specific actions, a hand-tracking controlled cursor can be used ' +
      'to interact with the interface, in which hand gestures commit the intended action.',
    image: kuidSoftware,
  },
  {
    title: 'Hand Bones Rendering',
    description:
      'Using a third party software, a consistent filtering pipeline strategy was found in order to extract ' +
      'all isolated bones from CT images of hands. This is a 3D rendering of the various labels ' +
      'that were segmented from a hand CT scan.',
    image: segmentationView,
  },
  {
    title: 'Hand Bones Extraction',
    description:
      'Using Python and scientific libraries, a strategy for extracting hand bones in ' +
      'medical images was successfully implemented.',
    image: segmentationPython,
  },
  {
    title: 'Bone Surface Reconstruction',
    description:
      'An approach was found and implemented in order to improve the surface of 3D bone reconstruction ' +
      'from CT medical images. It creates watertight meshes by closing holes and removing artifacts from ' +
      'the inside of the bone.',
    image: stlCleanup,
  },
];

export default imageDescriptionList;
