import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import MovieDownload from "../components/MovieDownload";
import useMoviesStorage from "../hooks/useMoviesStorage";
import { Button, Icon } from "@rneui/themed";

const FavoritesScreen = () => {
  const [movies, setMovies] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const { onGetFavoriteMovies, onDeleteFavoriteMovie } = useMoviesStorage();


  const loadMovies = async () => {
    try {
      const moviesResponse = await onGetFavoriteMovies();
      setMovies(moviesResponse);
      console.log(moviesResponse);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  useEffect(() => {
    loadMovies().catch(null);
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const movieRefresh = await onGetFavoriteMovies();
      setMovies(movieRefresh);
      setRefreshing(false);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const handleDeleteMovie = async (itemTitle) => {
    try {
      await onDeleteFavoriteMovie(itemTitle);
      await loadMovies();
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screenNameContainer}>
        <Text style={styles.text}>Favorites</Text>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.moviesDownloadedContainer}>
          {movies?.map((item, index) =>
            item["#TITLE"] !== undefined ? (
              <TouchableOpacity style={styles.touchableComponent} key={index}>
                <MovieDownload
                  key={index}
                  title={item["#TITLE"]}
                  image={item["#IMG_POSTER"]}
                />
                <View style={styles.buttonDelete}>
                  <Button
                    onPress={() => handleDeleteMovie(item["#TITLE"])}
                    type="clear"
                    icon={<Icon name="delete" color={"#fff"} />}
                  />
                </View>
              </TouchableOpacity>
            ) : undefined
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "500",
  },
  screenNameContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
    marginTop: 50,
  },
  moviesDownloadedContainer: {
    flex: 1,
    marginBottom: 70,
  },
  touchableComponent: {
    flex: 1,
    flexDirection: "row",
  },
  buttonDelete: {
    height: 110,
    borderRadius: 14,
    backgroundColor: "#e42222",
    justifyContent: 'center',
  },
});

export default FavoritesScreen;