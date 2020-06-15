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
      'seven-segment displays, through multiplexing, to display a second by second down count. ' +
      'Once 0 is reached it emmits visual and sound alerts, and activates ' +
      'an elecro-mechanical switch that can be used for generic purposes.',
    image: counterCircuit,
  },
  {
    title: 'Anti-Carjacking Circuit',
    description:
      'Low cost AVR microcontroller based device capable of receiving SMS requests ' +
      'and not only responding with its current coordinates, but also turn off the vehicle. ' +
      'It interacts with both GSM and GPS modules using an event/interruption based logic, ' +
      'which allows it to gather all required information while keeping low power consumption.',
    image: anticarjackingCircuit,
  },
  {
    title: 'Anti-Carjacking Board Design',
    description:
      '3D rendering of the proposed design for the Anti-Carjacking circuit board.',
    image: anticarjackingBoard,
  },
  {
    title: 'Anti-Carjacking Map Tracker',
    description:
      'Software built to track the coordinates gathered from the Anti-Carjacking device.' +
      'It imports the messages directly from a phone using Hayes command set through a serial connection ' +
      'and then filters the information through RegEx. Integrated to a maps API, it displays ' +
      'the most likely routes taken by the vehicle.',
    image: anticarjackingMap,
  },
  {
    title: 'Pectus Carinatum Pressure Meter',
    description:
      'USB device powered by a 3V lithium battery that measures the force applied ' +
      'by a Pectus Carinatum correction bar using a force sensing resistor, ' +
      'and displays it in a small Nokia 5110 LCD. Uses an AVR microcontroller and interruptions ' +
      'in order to maintain low poer consumption.',
    image: carinatumForce,
  },
  {
    title: 'Medbox Prototype',
    description:
      'CAD design for an automatic medicine dispenser for the elderly. ' +
      'It contains multiple sections that can be recharged with medication, ' +
      'a motor to spin the sections and dispenser tube for the pills to fall. ' +
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
      'Controller board that provides the functionality to the pill dispenser module, ' +
      'and interacts with the user by means of a touch screen.',
    image: medboxConstruction,
  },
  {
    title: 'Medbox System',
    description:
      'Pill dispenser system with an intuitive UI that shows medication dispenses scheduling ' +
      'and requires activation. And additionally a separate portable module that synchronizes ' +
      'the scheduling with the main module.',
    image: medboxWorking,
  },
  {
    title: 'Kuid Box Prototype',
    description:
      'Multimodal device capable of recognizing commands through speech and gestures, and overlays the ' +
      'television signal with a custom interface. It allows to change channel and volume, as well as running ' +
      'custom applications such as games, video and audio player, or videoconferencing.',
    image: kuidPrototype,
  },
  {
    title: 'Kuid Software',
    description:
      'UI example of a movie library overlayed upon the television channel, and a fullscreen movie player. ' +
      'Besides speech and gestures for specific actions, a hand-tracking controlled cursor can used to interact ' +
      'with the interface, in which hand gestures are used to commit the intended action.',
    image: kuidSoftware,
  },
  {
    title: 'Hand Bones Rendering',
    description:
      'Using a third party software, a consistent filtering pipeline strategy was found in order to extract ' +
      'all isolated bones from CT images of hands. Here are illustrated the various labels for the bones.',
    image: segmentationView,
  },
  {
    title: 'Hand Bones Extraction',
    description:
      'Using Python and scientific libraries, a previously found strategy for extracting hand bones in ' +
      'medical images was successfully implemented.',
    image: segmentationPython,
  },
  {
    title: 'Bone Surface Reconstruction',
    description:
      'A strategy was found and implemented in order to improve the surface of 3D bone reconstruction ' +
      'from CT medical images. It creates watertight meshes by closing holes and removing artifacts from ' +
      'the inside of the bone.',
    image: stlCleanup,
  },
];

export default imageDescriptionList;
