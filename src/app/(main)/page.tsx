import { TechSection }  from "./TechSection";
import { Showcase }     from "./Showcase";
import { SkillSection } from "./SkillSection";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Showcase />
      <TechSection />
      <SkillSection isFilled />
      <h1 className="text-center">Home</h1>
    </div>
  );
};

export default Home;