import FilmRow from "./FilmRow";
import StaticHead from "./StaticHead";

const TVShows = function () {
  return (
    <>
      <title>Netflix - TV Shows</title>
      <div className="container-fluid px-4">
        <StaticHead />
        <h4>Trending Now</h4>
        <FilmRow search={"breaking"} />
        <h4>Watch it Again</h4>
        <FilmRow search={"black"} />
        <h4>New Releases</h4>
        <FilmRow search={"angel"} />
      </div>
    </>
  );
};

export default TVShows;
