import beam1x1 from "../assets/partsPhotos/beam1x1.png";
import brick2x8 from "../assets/partsPhotos/brick2x8.png";
import combWheel from "../assets/partsPhotos/combWheel.png";
import crossBlock90Degrees from "../assets/partsPhotos/crossBlock90Degrees.png";
import doubleBush3MØ49 from "../assets/partsPhotos/doubleBush3MØ49.png";
import doubleCrossBlock from "../assets/partsPhotos/doubleCrossBlock.png";
import form5MWBallCuup from "../assets/partsPhotos/form5MWBallCuup.png";
import halfbeamCurve3x5 from "../assets/partsPhotos/halfbeamCurve3x5.png";
import lever1x4WithoutNotch from "../assets/partsPhotos/lever1x4WithoutNotch.png";
import plate2x2W1Knob from "../assets/partsPhotos/plate2x2W1Knob.png";
import plate2x2wreducedKnobs from "../assets/partsPhotos/plate2x2wreducedKnobs.png";
import plate2x212wreducedKnobs from "../assets/partsPhotos/plate2x212wreducedKnobs.png";
import rightBasePlate2x3WCrossHole from "../assets/partsPhotos/rightBasePlate2x3WCrossHole.png";
import technicAngBeam4x290Deg from "../assets/partsPhotos/technicAngBeam4x290Deg.png";
import technicAngularBeam4x6 from "../assets/partsPhotos/technicAngularBeam4x6.png";

export type IItemCard = {
  id?: number;
  vendorCode: string;
  namePosition: string;
  price: number;
  photo: string;
  specialSuggestion: boolean;
};

const dataProducts = [
  {
    id: 1,
    vendorCode: "6121485/18654",
    namePosition: "BEAM 1X1",
    price: 0.4,
    photo: beam1x1,
    specialSuggestion: true,
  },
  {
    id: 2,
    vendorCode: "6187438/93888",
    namePosition: "BRICK 2X8",
    price: 0.35,
    photo: brick2x8,
    specialSuggestion: true,
  },
  {
    id: 3,
    vendorCode: "4210759/6575",
    namePosition: "COMB WHEEL",
    price: 0.28,
    photo: combWheel,
    specialSuggestion: true,
  },
  {
    id: 4,
    vendorCode: "6402250/40146",
    namePosition: "CROSS BLOCK 90 DEGREES",
    price: 0.3,
    photo: crossBlock90Degrees,
    specialSuggestion: true,
  },
  {
    id: 5,
    vendorCode: "6321303/44874",
    namePosition: "DOUBLE BUSH 3M Ø4.9",
    price: 0.17,
    photo: doubleBush3MØ49,
    specialSuggestion: true,
  },
  {
    id: 6,
    vendorCode: "6276963/42142",
    namePosition: "DOUBLE CROSS BLOCK",
    price: 0.12,
    photo: doubleCrossBlock,
    specialSuggestion: false,
  },
  {
    id: 7,
    vendorCode: "6278260/64872",
    namePosition: "FORM 5M W/ BALL CUUP",
    price: 0.73,
    photo: form5MWBallCuup,
    specialSuggestion: false,
  },
  {
    id: 8,
    vendorCode: "6327162/65714",
    namePosition: "HALFBEAM CURVE 3X5",
    price: 0.41,
    photo: halfbeamCurve3x5,
    specialSuggestion: false,
  },
  {
    id: 9,
    vendorCode: "6327548/63782",
    namePosition: "LEVER 1X4, WITHOUT NOTCH",
    price: 0.18,
    photo: lever1x4WithoutNotch,
    specialSuggestion: true,
  },
  {
    id: 10,
    vendorCode: "6402250/40146",
    namePosition: "PLATE 2X2 W/ 1 KNOB",
    price: 0.08,
    photo: plate2x2W1Knob,
    specialSuggestion: true,
  },
  {
    id: 11,
    vendorCode: "6126082/23893",
    namePosition: "PLATE 2X2 W/ REDUCED KNOBS",
    price: 0.07,
    photo: plate2x2wreducedKnobs,
    specialSuggestion: true,
  },
  {
    id: 12,
    vendorCode: "6321716/71710",
    namePosition: "PLATE 2X2 W/ REDUCED KNOBS 1/2",
    price: 0.4,
    photo: plate2x212wreducedKnobs,
    specialSuggestion: true,
  },
  {
    id: 13,
    vendorCode: "6430392/238",
    namePosition: "RIGHT BASE PLATE 2X3 W/ CROSS HOLE",
    price: 0.52,
    photo: rightBasePlate2x3WCrossHole,
    specialSuggestion: true,
  },
  {
    id: 14,
    vendorCode: "6411444/42137",
    namePosition: "TECHNIC ANG. BEAM 4X2 90 DEG",
    price: 0.13,
    photo: technicAngBeam4x290Deg,
    specialSuggestion: true,
  },
  {
    id: 15,
    vendorCode: "6418454/42149",
    namePosition: "TECHNIC ANGULAR BEAM 4X6",
    price: 0.29,
    photo: technicAngularBeam4x6,
    specialSuggestion: true,
  },
];

export default dataProducts;
