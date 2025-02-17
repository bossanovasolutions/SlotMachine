import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Logo from "../../assets/images/royal-logo.png";
import Menu from "../../assets/images/menu-button.png";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        resizeMode="contain"
        style={[styles.logoWrapper, { marginTop: insets.top }]}
      />

      <Image
        source={Menu}
        resizeMode="contain"
        style={[styles.menuWrapper, { marginTop: insets.top }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
  },
  logoWrapper: {
    paddingTop: 20,
    height: 100,
    width: 120,
  },
  menuWrapper: {
    paddingTop: 20,
    height: 80,
    width: 80,
  },
});

export { Header };
