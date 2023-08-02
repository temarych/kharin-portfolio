import { Header } from "@components/Header";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Header />
      <h1 className="font-bold">Home</h1>
    </div>
  );
};

export default Home;