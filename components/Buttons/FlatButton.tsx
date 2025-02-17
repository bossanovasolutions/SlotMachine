import { View, Text, StyleSheet } from "react-native";
import React, { ReactElement } from "react";

const FlatButton = ({
  big,
  children,
}: {
  big?: boolean;
  children: ReactElement;
}) => {
  return (
    <View style={styles.body}>
      <Text style={[styles.text, { marginVertical: big ? 14 : 6 }]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DC943B",
    borderRadius: 40,
  },
  text: {
    color: "#131313",
    fontSize: 14,
    fontWeight: 900,
  },
});

export { FlatButton };
