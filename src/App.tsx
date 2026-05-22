import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";
import { Machines } from "./pages/Machines";
import { NotFound } from "./pages/NotFound";
import { WhatWeOffer } from "./pages/WhatWeOffer";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="machines" element={<Machines />} />
        <Route path="what-we-offer" element={<WhatWeOffer />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
