import { Showcase } from "./Showcase";

const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <Showcase />
      <h1 className="text-center">Home</h1>
    </div>
  );
};

export default Home;