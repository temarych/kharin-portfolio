import { Section }         from "@components/Section";
import { Footer }          from "@components/Footer";
import { Showcase }        from "./Showcase";
import { TechGrid }        from "./TechGrid";
import { SkillGrid }       from "./SkillGrid";
import { ReviewSlider }    from "./ReviewSlider";
import { GalleryShowcase } from "./GalleryShowcase";
import { TraitGrid }       from "./TraitGrid";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Showcase />
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
    </div>
  );
};

export default Home;