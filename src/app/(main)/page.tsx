"use client";

import { useRef }          from "react";
import { useInView }       from "framer-motion";
import { Section }         from "@components/Section";
import { Footer }          from "./Footer";
import { Showcase }        from "./Showcase";
import { TechGrid }        from "./TechGrid";
import { SkillGrid }       from "./SkillGrid";
import { ReviewSlider }    from "./ReviewSlider";
import { GalleryShowcase } from "./GalleryShowcase";
import { TraitGrid }       from "./TraitGrid";
import { AnchorMask }      from  "./AnchorMask";

const Home = () => {
  const showcaseRef      = useRef<HTMLElement>(null);
  const isShowcaseInView = useInView(showcaseRef);

  return (
    <div className="flex flex-col pt-16">
      <Showcase ref={showcaseRef} />
      <Section title="Technologies">
        <TechGrid />
      </Section>
      <Section title="Skills" isFilled>
        <SkillGrid />
      </Section>
      <Section title="Traits">
        <TraitGrid />
      </Section>
      <Section title="Reviews" isFilled>
        <ReviewSlider />
      </Section>
      <Section title="Gallery">
        <GalleryShowcase />
      </Section>
      <Footer />
      <AnchorMask isAnchorShown={!isShowcaseInView} />
    </div>
  );
};

export default Home;