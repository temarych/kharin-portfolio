import { Section }      from "@components/Section";
import { Showcase }     from "./Showcase";
import { TechGrid }     from "./TechGrid";
import { SkillGrid }    from "./SkillGrid";
import { ReviewSlider } from "./ReviewSlider";

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
      <h1 className="text-center">Home</h1>
    </div>
  );
};

export default Home;