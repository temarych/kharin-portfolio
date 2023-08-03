import { Section }         from "@components/Section";
import { Footer }          from "@components/Footer";
import { Showcase }        from "./Showcase";
import { TechGrid }        from "./TechGrid";
import { SkillGrid }       from "./SkillGrid";
import { ReviewSlider }    from "./ReviewSlider";
import { PhotoStrokes }    from "./PhotoStrokes";
import { GalleryShowcase } from "./GalleryShowcase";

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
      <Section title="Reviews">
        <ReviewSlider />
      </Section>
      <PhotoStrokes />
      <Section title="Gallery">
        <GalleryShowcase />
      </Section>
      <Footer />
    </div>
  );
};

export default Home;