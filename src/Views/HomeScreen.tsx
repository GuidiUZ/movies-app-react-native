import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Movies from "../components/Movies";
import fetchApi from "../utils/fetch";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { items } from "../types/typesFetch";

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  const getMovies = async () => {
    try {
      const response = await fetchApi("a");
      const response2 = await fetchApi("b");
      const response3 = await fetchApi("s");
      const moviesData = response.description;
      const moviesData2 = response2.description;
      const moviesData3 = response3.description;
      const moviesConcated = moviesData.concat(moviesData2, moviesData3);
      setMovies(moviesConcated);
      return Promise.resolve(moviesData);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleShowMoviesDescription = ({item} : items) => {
    navigation.navigate("MovieDescriptionScreen", {movieData: item });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroImageContainer}>
        {movies?.map((item, index) =>
          index == 0 ? (
            <Header key={index} homeImage={item["#IMG_POSTER"]} />
          ) : undefined
        )}
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.moviesContainer}>
          {movies?.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleShowMoviesDescription({ item })}
              style={styles.touchableContainer}
              key={index}
            >
              <Movies
                key={index}
                image={item["#IMG_POSTER"]}
                title={item["#TITLE"]}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    padding: 3,
    height: "100%",
  },
  gridContainer: {
    marginTop: 50,
    marginBottom: 75,
  },
  moviesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    margin: 0,
  },
  touchableContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
    justifyContent: "flex-start",
    marginLeft: 9,
    marginRight: 110,
  },
  heroImageContainer: {
    flex: 1,
    padding: 1,
  },
});

export default HomeScreen;
