import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button, Icon } from "@rneui/themed";
import useMoviesStorage from "../hooks/useMoviesStorage";

const MovieDescriptionScreen = ({ route }) => {
  const { movieData } = route.params;
  const { onSaveMovies, onSaveFavorites } = useMoviesStorage();
  const [favorite, setFavorite] = useState(false);

  const handleSavingMovies = async () => {
    try {
      await onSaveMovies(movieData);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const handleFavoriteSaveMovies = async () => {
    try {
      await onSaveFavorites(movieData);
      setFavorite(!favorite);
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imagePoster}
          source={{ uri: movieData["#IMG_POSTER"] }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.leftButtonContainer}>
          <Button
            icon={
              <Icon
                name={favorite ? "favorite" : "favorite-border"}
                color={"#fff"}
              />
            }
            onPress={() => handleFavoriteSaveMovies()}
            type="clear"
          />
        </View>
        <View style={styles.rightButtonContainer}>
          <Button
            icon={<Icon name="save-alt" color={"#fff"} />}
            type="clear"
            onPress={() => handleSavingMovies()}
          />
        </View>
      </View>
      <View style={styles.textDescription}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>{movieData["#TITLE"]}</Text>
          <Text style={styles.text}>Year: {movieData["#YEAR"]}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Icon name="star" color={"#ffc000"} />
          <Text style={styles.text}>{movieData["#RANK"]}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  imageContainer: {
    flex: 3,
    padding: 0,
    marginHorizontal: -14,
    marginTop: -15,
    marginBottom: -50,
  },
  imagePoster: {
    width: "100%",
    height: 650,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: "cover",
  },
  textDescription: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: -50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "500",
  },
  text: {
    color: "#fff",
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 100,
  },
  leftButtonContainer: {
  },
  rightButtonContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default MovieDescriptionScreen;
