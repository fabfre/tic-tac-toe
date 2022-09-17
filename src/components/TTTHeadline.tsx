import React from "react";
import { Text, TextProps } from "react-native";

interface TTTHeadlineProps extends TextProps {
  text: string;
}

const TTTHeadline = (props: TTTHeadlineProps) => {
  return (
    <Text
      {...props}
      style={[{ fontSize: 24, textAlign: "center" }, props.style]}
    >
      {props.text}
    </Text>
  );
};

export default TTTHeadline;
