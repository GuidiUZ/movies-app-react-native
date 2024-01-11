import AsyncStorage from "@react-native-async-storage/async-storage";
import { movies } from "../types/typesFetch";

const MY_MOVIE_KEY = "@MyMovie:Key";
const MY_FAVORITE_MOVIE_KEY = "@MyFavoriteMovie:Key";

const useMoviesStorage = () => {
  const saveInfoToStorage = async (storageKey, movie) => {
    try {
      const currentSaveMovies = await AsyncStorage.getItem(storageKey);

      if (currentSaveMovies !== null) {
        const currentSaveMoviesParse = JSON.parse(currentSaveMovies);

        const exists = currentSaveMoviesParse.some(
          (savedMovie) => savedMovie["#TITLE"] === movie["#TITLE"]
        );

        if (!exists) {
          currentSaveMoviesParse.push(movie);
        }

        

        await AsyncStorage.setItem(
          storageKey,
          JSON.stringify(currentSaveMoviesParse)
        );
        return Promise.resolve();
      }

      

      await AsyncStorage.setItem(storageKey, JSON.stringify([movie]));

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const handleSaveMovies = async (movie: movies) => {
    try {
      const result = await saveInfoToStorage(MY_MOVIE_KEY, movie);
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const handleSaveFavoritesMovies = async (movie: movies) => {
    try {
      const result = await saveInfoToStorage(MY_FAVORITE_MOVIE_KEY, movie);
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const handleGetSaveMovies = async () => {
    try {
      const moviesResult = await AsyncStorage.getItem(MY_MOVIE_KEY);

      if ((moviesResult) !== null) {
        const parseMovies = JSON.parse(moviesResult);
        return Promise.resolve(parseMovies);
      }
    } catch (error) {
      Promise.reject(error);
    }
  };


  const handleGetFavoriteMovies = async () => {
    try {
      const moviesResult = await AsyncStorage.getItem(MY_FAVORITE_MOVIE_KEY);

      if ((moviesResult) !== null) {
        const parseMovies = JSON.parse(moviesResult);
        return Promise.resolve(parseMovies);
      }
    } catch (error) {
      Promise.reject(error);
    }
  };

  const handleRemoveMovie = async (movieTitle: movies) => {
    try {
      const moviesResult = await AsyncStorage.getItem(MY_MOVIE_KEY);
      if (moviesResult !== null) {
        const parseMovies = JSON.parse(moviesResult);

        const updateMovies = parseMovies.filter(
          (movie) => movie["#TITLE"] !== movieTitle
        );
        await AsyncStorage.setItem(MY_MOVIE_KEY, JSON.stringify(updateMovies));
        return Promise.resolve();
      }
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };


  const handleRemoveFavoriteMovie = async (movieTitle: movies) => {
    try {
      const moviesResult = await AsyncStorage.getItem(MY_FAVORITE_MOVIE_KEY);
      if (moviesResult !== null) {
        const parseMovies = JSON.parse(moviesResult);

        const updateMovies = parseMovies.filter(
          (movie) => movie["#TITLE"] !== movieTitle
        );
        await AsyncStorage.setItem(MY_FAVORITE_MOVIE_KEY, JSON.stringify(updateMovies));
        return Promise.resolve();
      }
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return {
    onSaveMovies: handleSaveMovies,
    onGetMovies: handleGetSaveMovies,
    onGetFavoriteMovies: handleGetFavoriteMovies,
    onDeleteMovies: handleRemoveMovie,
    onDeleteFavoriteMovie: handleRemoveFavoriteMovie,
    onSaveFavorites: handleSaveFavoritesMovies,
  };
};

export default useMoviesStorage;
