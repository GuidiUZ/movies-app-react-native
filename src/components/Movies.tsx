import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { apiResult } from "../types/typesFetch";

const Movies: React.FC<apiResult> = ({ image, title }) => {
  return <Image style={styles.image} source={{ uri: image }} />;
};

const styles = StyleSheet.create({
  image: {
    padding: 60,
    borderRadius: 10,
    width: "33%",
    height: 150,
  },
});

export default Movies;
