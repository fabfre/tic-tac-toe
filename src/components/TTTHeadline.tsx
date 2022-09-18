import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

interface TTTHeadlineProps extends TextProps {
  text: string;
}

const TTTHeadline = (props: TTTHeadlineProps) => {
  return (
    <Text {...props} style={[styles.defaultText, props.style]}>
      {props.text}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    marginTop: 8,
    marginBottom: 16,
    fontSize: 24,
    textAlign: "center",
  },
});

export default TTTHeadline;
