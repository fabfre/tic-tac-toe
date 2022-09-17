import React from "react";
import { StyleSheet, View } from "react-native";
import TTTGameFieldRow from "./TTTGameFieldRow";

const FIELDHEIHGT = 64;

type TTTGameFieldProps = {
  gameField: Array<Array<string>>;
};

const TTTGameField = (props: TTTGameFieldProps): React.ReactElement => {
  const fieldRowsArray = [];
  for (let i = 0; i < props.gameField.length; i++) {
    fieldRowsArray.push(
      <TTTGameFieldRow
        height={FIELDHEIHGT}
        key={"row" + i}
        row={props.gameField[i]}
        rowNumber={i}
        numberOfFields={props.gameField.length}
      />
    );
  }
  return (
    <View
      style={[
        styles.playfieldContainer,
        {
          height: (FIELDHEIHGT + 2) * props.gameField.length,
        },
      ]}
    >
      {fieldRowsArray}
    </View>
  );
};

const styles = StyleSheet.create({
  playfieldContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default TTTGameField;
