import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return <section>
    <MainContainer />
    <SecondaryContainer />
  </section>;
};

export default Browse;
