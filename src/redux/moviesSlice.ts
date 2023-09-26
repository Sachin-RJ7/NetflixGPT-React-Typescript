import { createSlice } from "@reduxjs/toolkit";


interface NowPlayingMoviesState {
    nowPlayingMovies: null | string[]
}

const initialState: NowPlayingMoviesState = {
    nowPlayingMovies: null
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState, 
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        }
    }
})

export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;