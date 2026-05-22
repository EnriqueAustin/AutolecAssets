import { autolecAsset, galleryAsset } from "../lib/assets";

export const contact = {
  office: "013 246 1461/46",
  gideon: "082 444 3875",
  heila: "072 214 5601",
  email: "steenkampgideon@gmail.com",
  address: ["53 November St", "Middelburg", "1050", "South Africa"],
  facebook: "https://www.facebook.com/aaaautolec.co.za/",
};

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Our Machines", to: "/machines" },
  { label: "What We Offer", to: "/what-we-offer" },
  { label: "About Us", to: "/about" },
  { label: "Gallery", to: "/gallery" },
];

export const images = {
  logo: autolecAsset("autolec-assets-icon.png"),
  logoGrey: autolecAsset("autolec-assets-icon-grey.png"),
  hero: galleryAsset("goosen-sky.jpg"),
  heroAlt: autolecAsset("debagger-crop.jpg"),
  machines: autolecAsset("de-mooihof-crop.jpg"),
  bagger: autolecAsset("baggers-on-truck.jpg"),
  debagger: autolecAsset("de-mooihof-crop.jpg"),
  electrical: autolecAsset("starter1.jpg"),
  mechanical: autolecAsset("wrenches.jpg"),
  manufacturing: autolecAsset("weld.jpg"),
  about: autolecAsset("owen-thumb.jpg"),
  workshop: galleryAsset("gideon-weld.jpg"),
  team: galleryAsset("heila-and-gideon-high.jpg"),
};

export const stats = [
  { value: "1994", label: "Originally established" },
  { value: "150-200t/h", label: "Bagger loading capacity" },
  { value: "160-200t/h", label: "Tested de-bagger capacity" },
  { value: "540RPM", label: "Standard PTO input" },
];

export const services = [
  {
    title: "Auto-Electrical",
    copy: "Fault finding and repair services for agricultural vehicles, machines, facilities and site equipment.",
    image: images.electrical,
    tone: "green" as const,
  },
  {
    title: "Mechanical",
    copy: "Mechanical repair, rebuilding and maintenance for agricultural and construction vehicles and machinery.",
    image: images.mechanical,
    tone: "red" as const,
  },
  {
    title: "Manufacturing",
    copy: "Improved agricultural equipment designs, including baggers and de-baggers built from hard-won field insight.",
    image: images.manufacturing,
    tone: "blue" as const,
  },
];

export const machines = [
  {
    title: "Baggers",
    image: images.bagger,
    copy: [
      "Our baggers operate directly from the tractor's hydraulic system with a standard 2-pin hydraulic control and require a standard 540RPM PTO drive to operate.",
      "The streamlined design uses only two easily accessible bearings that need to be maintained.",
      "Each brake can be engaged individually for maximum control.",
    ],
    specs: [
      ["Pipe", "400mm X 4.5mm Seamless"],
      ["Wheels", '15" 6-hole'],
      ["Loading Capacity", "150-200t/h"],
      ["Brake System", "Closed Hydraulic System"],
      ["PTO", "1.8m Series 6"],
      ["PTO Input", "540RPM"],
    ] as Array<[string, string]>,
  },
  {
    title: "De-baggers",
    image: images.debagger,
    copy: [
      "Our de-baggers boast tested capacities of 160 to 200 tonnes per hour during optimal site conditions.",
      "They can be operated with any small to medium sized tractor with a 2-lever hydraulic valve bank and 4 female hydraulic couplers.",
      "The rear drive runs with a split shaft for easy maintenance and all sprockets have taper locks to ease replacement and reduce downtime.",
    ],
    specs: [
      ["PTO Input", "540RPM"],
      ["Gearbox", '90" 60HP'],
      ["Pipes", "405mm OD X 4.5mm"],
      ["Chains", "16B1"],
      ["Motor Capacity", "32KW"],
    ] as Array<[string, string]>,
  },
];

export const gallery = [
  ["AAA018", "goosen-sky.jpg"],
  ["AAA018 & AAB004", "goosen.jpg"],
  ["AAB004", "goosen bagger.jpg"],
  ["AAA018 & AAB004 ready to ship", "goosen2.jpg"],
  ["AAB001", "blue-bagger.jpg"],
  ["Proud to deliver AAB002 & AAB003", "double-blue2.jpg"],
  ["OL028 Rebuild", "debagger-long.jpg"],
  ["Bagger", "bagger-man2.jpg"],
  ["Simple brake system", "bagger-man3.jpg"],
  ["Almost ready to be painted", "bagger-man4.jpg"],
  ["Outloader", "ol-before2.jpg"],
  ["AAA014", "aaa014-2.jpg"],
  ["Hydraulic motor on flite", "flite.jpg"],
  ["De-bagger AAA013", "aaa013.jpg"],
  ["Workshop welding", "gideon-weld.jpg"],
  ["Machine frame", "frame-man1.jpg"],
  ["Green outloader", "green-outloader.jpg"],
  ["Ready for work", "truckload.jpeg"],
].map(([title, file]) => ({ title, image: galleryAsset(file) }));

export const faqs = [
  {
    question: "What does Autolec Assets specialize in?",
    answer:
      "Autolec Assets repairs and maintains vehicles, machines, facilities and equipment used in agriculture and agricultural construction.",
  },
  {
    question: "Do you manufacture agricultural equipment?",
    answer:
      "Yes. The company manufactures agricultural equipment such as baggers and de-baggers, using field experience to improve common machine issues.",
  },
  {
    question: "What tractors can operate the de-baggers?",
    answer:
      "The de-baggers can be operated with any small to medium sized tractor with a 2-lever hydraulic valve bank and 4 female hydraulic couplers.",
  },
  {
    question: "Where is Autolec Assets located?",
    answer: "Autolec Assets is based at 53 November St, Middelburg, 1050, South Africa.",
  },
];
