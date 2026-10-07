export const dynamic = "force-dynamic";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Transformation from "@/components/Transformation";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatYoullLearn from "@/components/WhatYoullLearn";
import PainPoints from "@/components/PainPoints";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* <Header /> */}
      <Hero />
      <PainPoints />
      <WhatYoullLearn />
      <Transformation />
      <Testimonials />
      <WhoIsThisFor />
      <About />
      <Footer />
    </main>
  );
}