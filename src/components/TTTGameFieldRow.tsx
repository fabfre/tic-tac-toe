import TTTGameSingleField from "./TTTGameSingleField";
import { StyleSheet, View } from "react-native";
import React from "react";

const TTTGameFieldRow = (props: {
  height: number;
  rowNumber: number;
  numberOfFields: number;
}): React.ReactElement => {
  const fieldsArray = [];
  for (let i = 0; i < props.numberOfFields; i++) {
    fieldsArray.push(
      <TTTGameSingleField
        key={"singleField" + i + props.rowNumber}
        rowNumber={props.rowNumber}
        fieldNumber={props.numberOfFields}
        height={props.height}
      />
    );
  }
  return <View style={styles.container}>{fieldsArray}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});

export default TTTGameFieldRow;
