import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface MainMovie {
  original_title: string;
  overview: string;
}

const MainContainer = () => {
  const movies = useSelector(
    (store: RootState) => store.movies?.nowPlayingMovies
  );

  if (!movies) return null; 

  const mainMovie = movies[0]; 

  if (!mainMovie || typeof mainMovie !== "object") return null;

  const { original_title, overview } = mainMovie as MainMovie;


  return (
    <div>
      <VideoTitle title={original_title} overView={overview} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
