import React from "react";
import { StyleSheet, View } from "react-native";
import TTTGameFieldRow from "./TTTGameFieldRow";

const FIELDHEIHGT = 64;

type TTTGameFieldProps = {
  n: number;
};

const TTTGameField = (props: TTTGameFieldProps): React.ReactElement => {
  const fieldRowsArray = [];
  for (let i = 0; i < props.n; i++) {
    fieldRowsArray.push(
      <TTTGameFieldRow
        height={FIELDHEIHGT}
        key={"row" + i}
        rowNumber={i}
        numberOfFields={props.n}
      />
    );
  }
  return (
    <View
      style={[
        styles.playfieldContainer,
        {
          height: (FIELDHEIHGT + 2) * props.n,
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
