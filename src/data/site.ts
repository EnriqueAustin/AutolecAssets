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
  { label: "Contact", to: "/contact" },
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

export type GalleryCategory = "Baggers" | "De-baggers" | "Outloaders" | "In the Workshop";

export const galleryCategories: GalleryCategory[] = ["Baggers", "De-baggers", "Outloaders", "In the Workshop"];

type GallerySource = {
  title: string;
  file: string;
  category: GalleryCategory;
  description: string;
  width: number;
  height: number;
};

const gallerySource: GallerySource[] = [
  { title: "Bagger AAA018", file: "goosen-sky.jpg", category: "Baggers", description: "A completed AAA018 bagger working in the field, running off a standard 540RPM PTO drive.", width: 1920, height: 3950 },
  { title: "Baggers AAA018 & AAB004", file: "goosen.jpg", category: "Baggers", description: "Two finished baggers built for 150–200 t/h loading, ready for handover.", width: 1920, height: 3950 },
  { title: "Bagger AAB004", file: "goosen-bagger.jpg", category: "Baggers", description: "The AAB004 bagger, designed around just two easily accessible bearings for simpler maintenance.", width: 1920, height: 3950 },
  { title: "AAA018 & AAB004 ready to ship", file: "goosen2.jpg", category: "Baggers", description: "A pair of baggers loaded and ready to leave the workshop for delivery.", width: 1920, height: 933 },
  { title: "Bagger AAB001", file: "blue-bagger.jpg", category: "Baggers", description: "The AAB001 bagger finished in blue, with brakes that engage individually for full control.", width: 622, height: 1280 },
  { title: "Baggers AAB002 & AAB003", file: "double-blue2.jpg", category: "Baggers", description: "Proud to deliver a matched pair of baggers built to the same high-throughput spec.", width: 640, height: 1316 },
  { title: "Bagger AAA014", file: "aaa014-2.jpg", category: "Baggers", description: "The AAA014 bagger, built on a 400mm seamless pipe frame.", width: 1920, height: 933 },
  { title: "Loaded and ready for work", file: "truckload.jpeg", category: "Baggers", description: "Machines loaded on the truck, ready for delivery to sites across South Africa.", width: 1280, height: 960 },
  { title: "De-bagger OL028 (rebuild)", file: "debagger-long.jpg", category: "De-baggers", description: "A rebuilt de-bagger returned to full working order on the workshop floor.", width: 1920, height: 3950 },
  { title: "De-bagger AAA013", file: "aaa013.jpg", category: "De-baggers", description: "The AAA013 de-bagger, tested at 160–200 tonnes per hour in optimal conditions.", width: 1920, height: 933 },
  { title: "Outloader", file: "ol-before2.jpg", category: "Outloaders", description: "An outloader in the Autolec workshop for repair and refit.", width: 1920, height: 3950 },
  { title: "Green outloader", file: "green-outloader.jpg", category: "Outloaders", description: "A completed outloader finished in green and ready for site.", width: 1920, height: 933 },
  { title: "Bagger build in progress", file: "bagger-man2.jpg", category: "In the Workshop", description: "A bagger taking shape on the workshop floor before paint.", width: 1920, height: 3950 },
  { title: "Simple, serviceable brake system", file: "bagger-man3.jpg", category: "In the Workshop", description: "The closed hydraulic brake system, kept simple so each brake can be engaged on its own.", width: 1920, height: 3950 },
  { title: "Almost ready for paint", file: "bagger-man4.jpg", category: "In the Workshop", description: "A bagger nearing completion, prepped and ready for its finishing coat.", width: 1920, height: 3950 },
  { title: "Hydraulic motor on flight", file: "flite.jpg", category: "In the Workshop", description: "A hydraulic drive motor mounted to the flight conveyor during assembly.", width: 1920, height: 933 },
  { title: "Workshop welding", file: "gideon-weld.jpg", category: "In the Workshop", description: "Fabrication and welding work in the Autolec workshop.", width: 1920, height: 2560 },
  { title: "Machine frame fabrication", file: "frame-man1.jpg", category: "In the Workshop", description: "A machine frame under construction, built from standard, readily available steel.", width: 1920, height: 3950 },
];

export const gallery = gallerySource.map(({ file, ...rest }) => ({
  ...rest,
  image: galleryAsset(file),
}));

export type GalleryItem = (typeof gallery)[number];

export const industries = [
  {
    title: "Sugar Cane",
    copy: "Bagger and de-bagger equipment built for high-volume sugar cane operations.",
    icon: "wheat" as const,
  },
  {
    title: "Grain & Feed",
    copy: "Loading and handling machinery suited for grain storage and feed lot sites.",
    icon: "grain" as const,
  },
  {
    title: "Citrus & Farming",
    copy: "Maintenance and repair support for citrus, crop and mixed farming operations.",
    icon: "citrus" as const,
  },
  {
    title: "Construction",
    copy: "Vehicle and equipment servicing for agricultural construction projects and site work.",
    icon: "construction" as const,
  },
];

// Verified Google Business rating. Quote text is intentionally omitted because
// the public reviews are photo/star ratings without written testimonials —
// add `quote` fields here only if real review text becomes available.
export const reviews = {
  rating: 4.5,
  count: 2,
  url: "https://maps.google.com/?cid=114585520739980332",
  authors: [
    { name: "John van Eeden", localGuide: false },
    { name: "Owen Knoesen", localGuide: true },
  ],
};

export const faqs = [
  {
    question: "What does Autolec Assets specialize in?",
    answer:
      "Autolec Assets repairs and maintains vehicles, machines, facilities and equipment used in agriculture and agricultural construction. We also manufacture improved baggers and de-baggers based on real field experience.",
  },
  {
    question: "Do you manufacture agricultural equipment?",
    answer:
      "Yes. The company manufactures agricultural equipment such as baggers and de-baggers, using decades of field experience to improve common machine issues like maintenance access, parts availability and operational reliability.",
  },
  {
    question: "What tractors can operate the de-baggers?",
    answer:
      "The de-baggers can be operated with any small to medium sized tractor with a 2-lever hydraulic valve bank and 4 female hydraulic couplers. Three personnel are needed: a tractor operator, de-bagger operator and load controller.",
  },
  {
    question: "Where is Autolec Assets located?",
    answer: "Autolec Assets is based at 53 November St, Middelburg, 1050, Mpumalanga, South Africa. We service clients across the region and deliver machines nationwide.",
  },
  {
    question: "What is the loading capacity of the baggers?",
    answer: "Our baggers have a loading capacity of 150-200 tonnes per hour. They operate from the tractor's hydraulic system with a standard 2-pin hydraulic control and 540RPM PTO drive.",
  },
  {
    question: "How do I request a quote or schedule a repair?",
    answer: "You can fill in the contact form on our website, email us at steenkampgideon@gmail.com, or call the office at 013 246 1461/46. For quick enquiries, use the WhatsApp button on this page.",
  },
  {
    question: "Do you offer on-site repair and maintenance?",
    answer: "Yes. Autolec provides on-site repair and maintenance services for agricultural vehicles, machines and site equipment. We've worked on sites across Mpumalanga and beyond.",
  },
  {
    question: "What parts do your machines use?",
    answer: "All our machines are designed around metric parts and standard components that are readily available in South Africa. This reduces downtime and makes sourcing replacements straightforward.",
  },
  {
    question: "How long has Autolec been in business?",
    answer: "AAA Autolec was originally established on 26 February 1994. The company was reacquired in 2016 and has since expanded into boilermaking, manufacturing and site maintenance.",
  },
  {
    question: "Do you deliver machines?",
    answer: "Yes, we arrange delivery of completed machines. Our baggers and de-baggers have been delivered to sites across South Africa.",
  },
];
