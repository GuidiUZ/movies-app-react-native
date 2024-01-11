import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { imageHero } from "../types/typesFetch";
import { Input, Button, Icon } from "@rneui/themed";

const Header: React.FC<imageHero> = ({ homeImage }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: homeImage }} style={styles.imageHome} />
      <View style={styles.headerComponents}>
        <View style={styles.leftContainer}>
          <Input
            style={styles.input}
            placeholder="Find your movie"
            placeholderTextColor={"#fff"}
            rightIcon={<Icon name="search" color={"#fff"} />}
          />
        </View>
        <View style={styles.rightContainer}>
          <Image
            style={styles.imageProfile}
            source={{ uri: "https://randomuser.me/api/portraits/men/44.jpg" }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageHome: {
    width: "100%",
    height: 650,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: "cover",
  },
  headerComponents: {
    borderRadius: 5,
    position: "absolute",
    marginTop: 50,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  },
  leftContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    marginTop: 10,
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    width: 50,
  },
  imageProfile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 35,
    marginBottom: 5,
  },
});

export default Header;
