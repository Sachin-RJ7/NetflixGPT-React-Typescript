import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../config/constant";
import { addNowPlayingMovies } from "../redux/moviesSlice";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addNowPlayingMovies(data.results))
    };
  
    useEffect(() => {
      getNowPlayingMovies();
    }, []);

    return {}
}

export default useNowPlayingMovies;