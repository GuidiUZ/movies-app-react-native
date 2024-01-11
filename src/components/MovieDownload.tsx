import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MovieDownload = ({ title, image }) => {

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image style={styles.imagePoster} source={{ uri: image }} />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.title}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#1d1d1d",
    width: "90%",
    height: 110,
    borderRadius: 14,
    marginBottom: 14,
  },
  leftContainer: {
    flex: 3,
  },
  rightContainer: {
    flex: 2,
    alignItems: "flex-end",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500"
  },
  imagePoster: {
    width: "50%",
    height: "100%",
  },
  title: {
    marginRight: 30,
  }
});

export default MovieDownload;
