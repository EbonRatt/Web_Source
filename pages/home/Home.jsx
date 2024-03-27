import "./home.scss";
import Navbar from "../../src/components/navbar/Navbar.jsx";
import Featured from "../../src/components/featured/Featured.jsx";
import List from "../../src/components/list/List.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
