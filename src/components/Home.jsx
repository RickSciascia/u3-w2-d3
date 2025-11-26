import FilmRow from "./FilmRow";
import StaticHead from "./StaticHead";

const Home = function () {
  return (
    <>
      <title>Netflix - Home</title>
      <div className="container-fluid px-4">
        <StaticHead />
        <h4>Trending Now</h4>
        <FilmRow search={"star wars"} />
        <h4>Watch it Again</h4>
        <FilmRow search={"fast"} />
        <h4>New Releases</h4>
        <FilmRow search={"mission impossible"} />
      </div>
    </>
  );
};

export default Home;
