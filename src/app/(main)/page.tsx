import { TechSection } from "./TechSection";
import { Showcase }    from "./Showcase";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Showcase />
      <TechSection />
      <h1 className="text-center">Home</h1>
    </div>
  );
};

export default Home;