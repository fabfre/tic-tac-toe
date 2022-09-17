import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GameContext from "../contexts/GameContext";

const TTTGameSingleField = (props: {
  rowNumber: number;
  fieldNumber: number;
  height: number;
  fieldType: string;
}): React.ReactElement => {
  return (
    <GameContext.Consumer>
      {({ currentPlayerAction }) => (
        <TouchableOpacity
          onPress={() =>
            currentPlayerAction({
              row: props.rowNumber,
              column: props.fieldNumber,
            })
          }
        >
          <View
            style={[
              {
                width: props.height,
                height: props.height,
              },
              styles.fieldContainer,
            ]}
          >
            <Text style={styles.textStyle}>
              {props.fieldType === "P2"
                ? "⭕"
                : props.fieldType === "P1"
                ? "❌"
                : ""}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </GameContext.Consumer>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    margin: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 44,
  },
});

export default TTTGameSingleField;
