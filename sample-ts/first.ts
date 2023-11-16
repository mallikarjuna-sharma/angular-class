type UserObject = {
  std: number;
  height: string;
  color: string;
  weight: number;
  iq: number;
  isAffected: boolean;
  allSubmarks: number[];
};

type ProductType = {
  headerText: string;
  brand: string;
  brandHref: string;
  rating: number;
  price: number;
  mrp: number;
  discont: number;
  brandVideo: string;
};

let userObject: UserObject = {
  std: 8,
  height: "100cm",
  color: "brown",
  weight: 90,
  iq: 80,
  isAffected: false,
  allSubmarks: [10, 20, 30, 40, 12],
  // [key] : [value] -> value can be string, array , boolean , int , json
};

let BATAmensShowts: ProductType = {
  headerText: "BATA Mens Boss-ace Uniform Dress Shoe    ",
  brand: "bata",
  brandHref:
    "https://www.amazon.in/s/ref=bl_sl_s_sh_web_1571283031?ie=UTF8&node=1571283031&field-brandtextbin=BATA",
  rating: 3.6,
  price: 619,
  mrp: 999,
  discont: -38,
  brandVideo: "video-url",
};

let results: number = 100;

let message: string = "good morning";


