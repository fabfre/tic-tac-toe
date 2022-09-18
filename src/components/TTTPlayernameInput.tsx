import { StyleSheet, Text, TextInput, View, ViewStyle } from "react-native";

function TTTPlayernameInput(props: {
  style?: ViewStyle;
  value: string;
  description: string;
  onChangeText?: (text: string) => void;
}) {
  return (
    <View style={props.style}>
      <Text>{props.description}</Text>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "gray",
    height: 48,
  },
});

export default TTTPlayernameInput;
